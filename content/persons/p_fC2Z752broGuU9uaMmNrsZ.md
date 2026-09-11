---
schema: wang-person/v1
id: p_fC2Z752broGuU9uaMmNrsZ
status: active
merged_into: null
display_name: 王嵩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DLwCgXbuVyYcxcFz5MAAq9
        subject_person_id: p_fC2Z752broGuU9uaMmNrsZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xRBwZ84EMBYmBDJZknXHi1
          claim_id: c_DLwCgXbuVyYcxcFz5MAAq9
          source_id: s_krQvA8haXuFhpHzroKMrHk
          stance: supports
          locator: CBDB:557789
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557789）
          source: &a1
            id: s_krQvA8haXuFhpHzroKMrHk
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 557789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557789&o=json
            external_identifier: CBDB:557789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCBiGCGeTNbgN75fJFzFp1
        subject_person_id: p_fC2Z752broGuU9uaMmNrsZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RUWNgZZR1TC93RaJD93ZoC
          claim_id: c_XCBiGCGeTNbgN75fJFzFp1
          source_id: s_krQvA8haXuFhpHzroKMrHk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VUkCpNf46JprlP9zpu1vXb
        subject_person_id: p_fC2Z752broGuU9uaMmNrsZ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_yN7H5J5BRRNNHyixb791JB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWyGjgj2ZiE8A9kCeFprNB
          claim_id: c_VUkCpNf46JprlP9zpu1vXb
          source_id: s_3P10n6pk9t16L2e_NVnu6I
          stance: supports
          locator: 南陽府志，lgid=878792：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3P10n6pk9t16L2e_NVnu6I
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王嵩妻)（CBDB 557790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557790&o=json
            external_identifier: CBDB:557790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yN7H5J5BRRNNHyixb791JB
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yN7H5J5BRRNNHyixb791JB | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王嵩妻)（CBDB 557790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557790&o=json)
- [中国历代人物传记资料库：王嵩（CBDB 557789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557789&o=json)
