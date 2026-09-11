---
schema: wang-person/v1
id: p_icAExCAPzEDDYhxquU8A5n
status: active
merged_into: null
display_name: 王翯
cbdb_id: 266709
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BRrctbnHyaHgsrE1n4adBG
        subject_person_id: p_icAExCAPzEDDYhxquU8A5n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翯，明人物。中国历代人物传记资料库（CBDB）以人物编号 266709 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_uz3gl5uxp7m_iy2HUJ_Auj
          claim_id: c_BRrctbnHyaHgsrE1n4adBG
          source_id: s_sSDkUYf8Yf9ngfxvnTSX6Y
          stance: supports
          locator: CBDB:266709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sSDkUYf8Yf9ngfxvnTSX6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王翯（CBDB 266709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266709&o=json
            external_identifier: CBDB:266709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_83efUo5Qxtx6xhF1ZGqrZn
        subject_person_id: p_icAExCAPzEDDYhxquU8A5n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JrcM7AghGe9kdi7pXVFGUU
          claim_id: c_83efUo5Qxtx6xhF1ZGqrZn
          source_id: s_sSDkUYf8Yf9ngfxvnTSX6Y
          stance: supports
          locator: CBDB:266709
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_sSDkUYf8Yf9ngfxvnTSX6Y
            source_type: api_record
            title: 中国历代人物传记资料库：王翯（CBDB 266709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266709&o=json
            external_identifier: CBDB:266709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
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
        id: c_Nmp4TfiVBFCuVSl8H8Y70c
        subject_person_id: p_icAExCAPzEDDYhxquU8A5n
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tHYCzriS6LnJ4HHGiVfcHQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JlXZVPF99MfkwBJH8aK6K1
          claim_id: c_Nmp4TfiVBFCuVSl8H8Y70c
          source_id: s_sSDkUYf8Yf9ngfxvnTSX6Y
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tHYCzriS6LnJ4HHGiVfcHQ
        status: active
        display_name: 王汝清
        merged_into_person_id: null
  other: []
---

# 王翯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王翯，明人物。中国历代人物传记资料库（CBDB）以人物编号 266709 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王翯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_tHYCzriS6LnJ4HHGiVfcHQ | 王汝清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翯（CBDB 266709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266709&o=json)
