---
schema: wang-person/v1
id: p_zRuB7uZRN1VCZeg1MVsEbz
status: active
merged_into: null
display_name: 王思誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XPCrDd3ki5Mi2FPQxAvWrZ
        subject_person_id: p_zRuB7uZRN1VCZeg1MVsEbz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zsU3UthcHtYwuTBT6BFd6v
          claim_id: c_XPCrDd3ki5Mi2FPQxAvWrZ
          source_id: s_5dFBm9cTi8HUy9WJQ9aHDh
          stance: supports
          locator: CBDB:332554
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332554）
          source: &a1
            id: s_5dFBm9cTi8HUy9WJQ9aHDh
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 332554）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332554&o=json
            external_identifier: CBDB:332554
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u4CrFBuPNmJ4A6bckLvsMv
        subject_person_id: p_zRuB7uZRN1VCZeg1MVsEbz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FHdnnLemcM2194Zdvtq4pq
          claim_id: c_u4CrFBuPNmJ4A6bckLvsMv
          source_id: s_5dFBm9cTi8HUy9WJQ9aHDh
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_udLsqC5x5C2mzMKtM6KD_7
        subject_person_id: p_zRuB7uZRN1VCZeg1MVsEbz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xb8N_E4SzmhaPGtYzCqaIL
          claim_id: c_udLsqC5x5C2mzMKtM6KD_7
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5uu71pxW5w8mKk3gRJU4Cp
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 198040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json
            external_identifier: CBDB:198040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        status: active
        display_name: 王誼
        merged_into_person_id: null
  other: []
---

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_8Ron7BDzFq6b4FwKnZ8W1Z | 王誼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 332554）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332554&o=json)
- [中国历代人物传记资料库：王誼（CBDB 198040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json)
