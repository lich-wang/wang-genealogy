---
schema: wang-person/v1
id: p_jsvA9Jcpw1enAzLDEcNsg2
status: active
merged_into: null
display_name: 王標
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yunA53ciun1mjVB3eDuuy
        subject_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TaF2nookEMzZEBgtQLS1pB
          claim_id: c_6yunA53ciun1mjVB3eDuuy
          source_id: s_TYGaJQeoXncXN5NXja1GJi
          stance: supports
          locator: CBDB:304461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304461）
          source: &a1
            id: s_TYGaJQeoXncXN5NXja1GJi
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 304461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json
            external_identifier: CBDB:304461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MdQ2BoDYQJLt7FhnKDZw7o
        subject_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王標，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 304461）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rfur8QhmO9TIqogwJd1tSr
          claim_id: c_MdQ2BoDYQJLt7FhnKDZw7o
          source_id: s_TYGaJQeoXncXN5NXja1GJi
          stance: supports
          locator: CBDB:304461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MJyqv-Ymwp8rtRp443VnL3
        subject_person_id: p_hGzTEBArhtNBmqP8bhoNhy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IUGqJiMYEYwlbOsDZTluBg
          claim_id: c_MJyqv-Ymwp8rtRp443VnL3
          source_id: s_L85JsPepw3o-rhEhhdc1Pm
          stance: supports
          locator: CBDB：兄弟 王材（126534）之父／母 王祿
          quotation: null
          interpretation_note: 由兄弟关系推断：王標 与 王材 为同胞（CBDB 记「兄」），王材 之父／母即 王標 之父／母。
          source:
            id: s_L85JsPepw3o-rhEhhdc1Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 304461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json
            external_identifier: CBDB:304461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hGzTEBArhtNBmqP8bhoNhy
        status: active
        display_name: 王祿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EjjKPwKi177a4_l4g21nHW
        subject_person_id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jsvA9Jcpw1enAzLDEcNsg2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2tS7SvwoizaxM3JQ4PkAFU
          claim_id: c_EjjKPwKi177a4_l4g21nHW
          source_id: s_L85JsPepw3o-rhEhhdc1Pm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126534 王材）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_L85JsPepw3o-rhEhhdc1Pm
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 304461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json
            external_identifier: CBDB:304461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H4Uy6ApLcV6Le6pdH8Y4bo
        status: active
        display_name: 王材
        merged_into_person_id: null
---

# 王標

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王標 | accepted |
| bio.summary | 王標，明人物。嘉靖二十年進士，籍贯新城。（中国历代人物传记资料库 CBDB 304461） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hGzTEBArhtNBmqP8bhoNhy | 王祿 | accepted |
| other | p_H4Uy6ApLcV6Le6pdH8Y4bo | 王材 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 304461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304461&o=json)
