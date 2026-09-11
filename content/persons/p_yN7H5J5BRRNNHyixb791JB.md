---
schema: wang-person/v1
id: p_yN7H5J5BRRNNHyixb791JB
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 557790
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2iT-HayYw8L34NUA-80vS8
        subject_person_id: p_yN7H5J5BRRNNHyixb791JB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏，清人物。籍贯鄧州，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 557790）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sOBdl7sbvATTK-jS22KSaT
          claim_id: c_2iT-HayYw8L34NUA-80vS8
          source_id: s_3P10n6pk9t16L2e_NVnu6I
          stance: supports
          locator: CBDB:557790
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wV6SSvbtwRX2wMUURK53-M
        subject_person_id: p_yN7H5J5BRRNNHyixb791JB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZqY8cFjFlwAvq4CBNuAsV7
          claim_id: c_wV6SSvbtwRX2wMUURK53-M
          source_id: s_3P10n6pk9t16L2e_NVnu6I
          stance: supports
          locator: CBDB:557790
          quotation: null
          interpretation_note: CBDB 明确记录的王嵩配偶
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
          source: *a1
      object_person:
        id: p_fC2Z752broGuU9uaMmNrsZ
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 孫氏，清人物。籍贯鄧州，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 557790） | accepted |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fC2Z752broGuU9uaMmNrsZ | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王嵩妻)（CBDB 557790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557790&o=json)
