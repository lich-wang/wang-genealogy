---
schema: wang-person/v1
id: p_jUFi92KMxHRSexVAgYw8ot
status: active
merged_into: null
display_name: 王益
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oxfKByCeuXpPSGLqAArL1r
        subject_person_id: p_jUFi92KMxHRSexVAgYw8ot
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EBQSLrXsevkAg4vYqZNRee
          claim_id: c_oxfKByCeuXpPSGLqAArL1r
          source_id: s_Zs35CxSUoAqJdvQcmD9dyF
          stance: supports
          locator: CBDB:222172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222172）
          source: &a1
            id: s_Zs35CxSUoAqJdvQcmD9dyF
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HgeKt9ftYmRNQtgz5VyZ57
        subject_person_id: p_jUFi92KMxHRSexVAgYw8ot
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王益，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WCDbAu09-pOrwUhdz3kQH0
          claim_id: c_HgeKt9ftYmRNQtgz5VyZ57
          source_id: s_Zs35CxSUoAqJdvQcmD9dyF
          stance: supports
          locator: CBDB:222172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JKzhZCQkfQj2C4ZS6-GUZm
        subject_person_id: p_miQBcK4jqJAfweCMT7iV4p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jUFi92KMxHRSexVAgYw8ot
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e3Y0yJ47DsdkgsriHjtxVb
          claim_id: c_JKzhZCQkfQj2C4ZS6-GUZm
          source_id: s_6WoqsbV-S1nsLgWlzoDWdg
          stance: supports
          locator: CBDB：兄弟 王荁（206722）之父／母 王交
          quotation: null
          interpretation_note: 由兄弟关系推断：王益 与 王荁 为同胞（CBDB 记「弟」），王荁 之父／母即 王益 之父／母。
          source:
            id: s_6WoqsbV-S1nsLgWlzoDWdg
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_miQBcK4jqJAfweCMT7iV4p
        status: active
        display_name: 王交
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__FT28h3q9CJ9iZ3GiSob_c
        subject_person_id: p_ahJ97i6Ls8wgTe2hMc2p2s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jUFi92KMxHRSexVAgYw8ot
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XGdVAMVSzKa1bJ8cTnjAir
          claim_id: c__FT28h3q9CJ9iZ3GiSob_c
          source_id: s_6WoqsbV-S1nsLgWlzoDWdg
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206722 王荁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6WoqsbV-S1nsLgWlzoDWdg
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 222172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json
            external_identifier: CBDB:222172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ahJ97i6Ls8wgTe2hMc2p2s
        status: active
        display_name: 王荁
        merged_into_person_id: null
---

# 王益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王益 | accepted |
| bio.summary | 王益，明人物。萬曆十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 222172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miQBcK4jqJAfweCMT7iV4p | 王交 | accepted |
| other | p_ahJ97i6Ls8wgTe2hMc2p2s | 王荁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王益（CBDB 222172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222172&o=json)
