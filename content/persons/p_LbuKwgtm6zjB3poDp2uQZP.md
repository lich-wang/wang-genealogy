---
schema: wang-person/v1
id: p_LbuKwgtm6zjB3poDp2uQZP
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcZiYynkw7MJCuAXcCX6PF
        subject_person_id: p_LbuKwgtm6zjB3poDp2uQZP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vvkBwKX1CesXJQx4QK7g67
          claim_id: c_vcZiYynkw7MJCuAXcCX6PF
          source_id: s_2hhiMT6b9vZ3iP4YbxPZL3
          stance: supports
          locator: CBDB:265729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265729）
          source: &a1
            id: s_2hhiMT6b9vZ3iP4YbxPZL3
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 265729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265729&o=json
            external_identifier: CBDB:265729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bMeW3HGWWrCrqVDxQSRAR
        subject_person_id: p_LbuKwgtm6zjB3poDp2uQZP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fYqoVY49vudNk3AQvePhbO
          claim_id: c_2bMeW3HGWWrCrqVDxQSRAR
          source_id: s_2hhiMT6b9vZ3iP4YbxPZL3
          stance: supports
          locator: CBDB:265729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ZDpmjeK0rnewSTSGnRjH_Z
        subject_person_id: p_LbuKwgtm6zjB3poDp2uQZP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AfuEzx374a7WNXTfcMcWwd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7XYXi5byx3_rDbns87JIfo
          claim_id: c_ZDpmjeK0rnewSTSGnRjH_Z
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第一百名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eiGJS5K3CYMceZonDwA3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 67807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json
            external_identifier: CBDB:67807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AfuEzx374a7WNXTfcMcWwd
        status: active
        display_name: 王獻臣
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AfuEzx374a7WNXTfcMcWwd | 王獻臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 265729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265729&o=json)
- [中国历代人物传记资料库：王獻臣（CBDB 67807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json)
