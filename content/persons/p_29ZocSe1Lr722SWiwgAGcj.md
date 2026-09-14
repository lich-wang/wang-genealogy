---
schema: wang-person/v1
id: p_29ZocSe1Lr722SWiwgAGcj
status: active
merged_into: null
display_name: 王桓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kt7GkoDwY2jCBYyXn4EV6m
        subject_person_id: p_29ZocSe1Lr722SWiwgAGcj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mVSFteGFELjdbfqPDNfDU8
          claim_id: c_Kt7GkoDwY2jCBYyXn4EV6m
          source_id: s_R7xfWzW7P13DFYDqgFJMfr
          stance: supports
          locator: CBDB:260170
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260170）
          source: &a1
            id: s_R7xfWzW7P13DFYDqgFJMfr
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 260170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json
            external_identifier: CBDB:260170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zRbYYFxGK7nVnE8ocHH9NU
        subject_person_id: p_29ZocSe1Lr722SWiwgAGcj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桓，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260170）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_S6-ADGroLm6mP6ZWx1GuZD
          claim_id: c_zRbYYFxGK7nVnE8ocHH9NU
          source_id: s_R7xfWzW7P13DFYDqgFJMfr
          stance: supports
          locator: CBDB:260170
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IG3NAMMTGj3aqcVZnGsfZW
        subject_person_id: p_bGA9f5CTCFCRJmcWcUEGyG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_29ZocSe1Lr722SWiwgAGcj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dVbgrTtTYO3J71eDWD7Gfv
          claim_id: c_IG3NAMMTGj3aqcVZnGsfZW
          source_id: s__XLzl09PSJlVkci3RmjHWw
          stance: supports
          locator: CBDB：兄弟 王啟（126669）之父／母 王本
          quotation: null
          interpretation_note: 由兄弟关系推断：王桓 与 王啟 为同胞（CBDB 记「弟」），王啟 之父／母即 王桓 之父／母。
          source:
            id: s__XLzl09PSJlVkci3RmjHWw
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 260170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json
            external_identifier: CBDB:260170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bGA9f5CTCFCRJmcWcUEGyG
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_mVSvHbqw1ygOw3M7KCOJjz
        subject_person_id: p_29ZocSe1Lr722SWiwgAGcj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y8c9Xt6HZtEueH7Ywuv2af
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OYMC1i9ln372155fxpRrOb
          claim_id: c_mVSvHbqw1ygOw3M7KCOJjz
          source_id: s__XLzl09PSJlVkci3RmjHWw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126669 王啟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__XLzl09PSJlVkci3RmjHWw
            source_type: api_record
            title: 中国历代人物传记资料库：王桓（CBDB 260170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json
            external_identifier: CBDB:260170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y8c9Xt6HZtEueH7Ywuv2af
        status: active
        display_name: 王啟
        merged_into_person_id: null
---

# 王桓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桓 | accepted |
| bio.summary | 王桓，明人物。成化二十三年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 260170） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bGA9f5CTCFCRJmcWcUEGyG | 王本 | accepted |
| other | p_Y8c9Xt6HZtEueH7Ywuv2af | 王啟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王桓（CBDB 260170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260170&o=json)
