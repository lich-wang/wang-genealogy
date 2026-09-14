---
schema: wang-person/v1
id: p_VnMF4vYCZBF1or3PKc5Tz3
status: active
merged_into: null
display_name: 王用賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nAACG1TMuGab5waLkZQVDb
        subject_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vWaNbyBojorQ6CgP7sEfGP
          claim_id: c_nAACG1TMuGab5waLkZQVDb
          source_id: s_iHQ2uPMijva2T576tJNuYB
          stance: supports
          locator: CBDB:324565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324565）
          source: &a1
            id: s_iHQ2uPMijva2T576tJNuYB
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 324565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json
            external_identifier: CBDB:324565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BdyJCBQSD4hgdB8kWQHk5L
        subject_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賓，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SNRQZXOZG1RC-PYsN45LYX
          claim_id: c_BdyJCBQSD4hgdB8kWQHk5L
          source_id: s_iHQ2uPMijva2T576tJNuYB
          stance: supports
          locator: CBDB:324565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_QFT5zrDWFpkBG3mXfKo1P9
        subject_person_id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xSzOjJcC2MyF5upACJ3cWb
          claim_id: c_QFT5zrDWFpkBG3mXfKo1P9
          source_id: s_-G7fBIBN9btKEGuhClctud
          stance: supports
          locator: CBDB：兄弟 王用楨（204826）之父／母 王纘宗
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賓 与 王用楨 为同胞（CBDB 记「弟」），王用楨 之父／母即 王用賓 之父／母。
          source:
            id: s_-G7fBIBN9btKEGuhClctud
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 324565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json
            external_identifier: CBDB:324565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oZ4kQSFi4x4MxZ3DEL5Xbj
        status: active
        display_name: 王纘宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0G5wbZGXih3lHIMX3bOiwB
        subject_person_id: p_VnMF4vYCZBF1or3PKc5Tz3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpB2Y5ktFHzZw4LUr2KGvj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kPrLdkiy0tAwTf3QNNtAn
          claim_id: c_0G5wbZGXih3lHIMX3bOiwB
          source_id: s_-G7fBIBN9btKEGuhClctud
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204826 王用楨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-G7fBIBN9btKEGuhClctud
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 324565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json
            external_identifier: CBDB:324565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpB2Y5ktFHzZw4LUr2KGvj
        status: active
        display_name: 王用楨
        merged_into_person_id: null
---

# 王用賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賓 | accepted |
| bio.summary | 王用賓，明人物。嘉靖三十八年進士，籍贯南充。（中国历代人物传记资料库 CBDB 324565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZ4kQSFi4x4MxZ3DEL5Xbj | 王纘宗 | accepted |
| other | p_hpB2Y5ktFHzZw4LUr2KGvj | 王用楨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用賓（CBDB 324565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324565&o=json)
