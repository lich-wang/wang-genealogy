---
schema: wang-person/v1
id: p_h1x6uoqPx8KyBczJG44BbJ
status: active
merged_into: null
display_name: 王同京
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1m7nxgMEkw9fkWvLGpD8T5
        subject_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMP3gdNMD1oanZz78664Rb
          claim_id: c_1m7nxgMEkw9fkWvLGpD8T5
          source_id: s_YGdbtoreQ6A54rCHxF95Yp
          stance: supports
          locator: CBDB:228288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228288）
          source: &a1
            id: s_YGdbtoreQ6A54rCHxF95Yp
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 228288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json
            external_identifier: CBDB:228288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vKjg1Wwoyb8gi5stX3LQ51
        subject_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同京，明人物。萬曆丙戌科進士進士，籍贯晉江。（中国历代人物传记资料库 CBDB 228288）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SJUNJyZ2piI5D80412Y8xD
          claim_id: c_vKjg1Wwoyb8gi5stX3LQ51
          source_id: s_YGdbtoreQ6A54rCHxF95Yp
          stance: supports
          locator: CBDB:228288
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-J1auZX6Y48ipqVL6LszFk
        subject_person_id: p_kNvoZFnJm2KQZhvhLXYs7R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fyh6ZRMiQr00rn-jrdXgwH
          claim_id: c_-J1auZX6Y48ipqVL6LszFk
          source_id: s_pxkqmRAMwHC3-29nCQPypw
          stance: supports
          locator: CBDB：兄弟 王同休（207136）之父／母 王惟中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同京 与 王同休 为同胞（CBDB 记「兄」），王同休 之父／母即 王同京 之父／母。
          source:
            id: s_pxkqmRAMwHC3-29nCQPypw
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 228288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json
            external_identifier: CBDB:228288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kNvoZFnJm2KQZhvhLXYs7R
        status: active
        display_name: 王惟中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0Zch3S8gddvkn2bTzUW1k9
        subject_person_id: p_MWFGy9uHg9NsSwK8c42QRv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h1x6uoqPx8KyBczJG44BbJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZsvm1r23hqV2Gd7SVGLFv
          claim_id: c_0Zch3S8gddvkn2bTzUW1k9
          source_id: s_pxkqmRAMwHC3-29nCQPypw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207136 王同休）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pxkqmRAMwHC3-29nCQPypw
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 228288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json
            external_identifier: CBDB:228288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MWFGy9uHg9NsSwK8c42QRv
        status: active
        display_name: 王同休
        merged_into_person_id: null
---

# 王同京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同京 | accepted |
| bio.summary | 王同京，明人物。萬曆丙戌科進士進士，籍贯晉江。（中国历代人物传记资料库 CBDB 228288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kNvoZFnJm2KQZhvhLXYs7R | 王惟中 | accepted |
| other | p_MWFGy9uHg9NsSwK8c42QRv | 王同休 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同京（CBDB 228288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228288&o=json)
