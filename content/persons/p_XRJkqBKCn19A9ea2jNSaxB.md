---
schema: wang-person/v1
id: p_XRJkqBKCn19A9ea2jNSaxB
status: active
merged_into: null
display_name: 王次學
cbdb_id: 266593
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yKJ8cVNrThGTLF1FM5zzvE
        subject_person_id: p_XRJkqBKCn19A9ea2jNSaxB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次學，明人物。中国历代人物传记资料库（CBDB）以人物编号 266593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_vnLuE8TRraI_i78I_sWmUy
          claim_id: c_yKJ8cVNrThGTLF1FM5zzvE
          source_id: s_2Tsc2hbQ58RuLwiNwKTswc
          stance: supports
          locator: CBDB:266593
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_2Tsc2hbQ58RuLwiNwKTswc
            source_type: api_record
            title: 中国历代人物传记资料库：王次學（CBDB 266593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266593&o=json
            external_identifier: CBDB:266593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8NzVHRnTLy3g4TrFJCWedj
        subject_person_id: p_XRJkqBKCn19A9ea2jNSaxB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王次學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gszWvU39XHLvoRzMZsE4CL
          claim_id: c_8NzVHRnTLy3g4TrFJCWedj
          source_id: s_2Tsc2hbQ58RuLwiNwKTswc
          stance: supports
          locator: CBDB:266593
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_2Tsc2hbQ58RuLwiNwKTswc
            source_type: api_record
            title: 中国历代人物传记资料库：王次學（CBDB 266593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266593&o=json
            external_identifier: CBDB:266593
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
        id: c_b0sr97y7Wkto9QnUMX2n5R
        subject_person_id: p_XRJkqBKCn19A9ea2jNSaxB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_z4aCxcZmXAafGUnNufCVpV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VBi09EYVgxwwk6cJE3-ViQ
          claim_id: c_b0sr97y7Wkto9QnUMX2n5R
          source_id: s_2ruKTegb7Gy8bvnrUTT9Kn
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2ruKTegb7Gy8bvnrUTT9Kn
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 198394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json
            external_identifier: CBDB:198394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_z4aCxcZmXAafGUnNufCVpV
        status: active
        display_name: 王重
        merged_into_person_id: null
  other: []
---

# 王次學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王次學，明人物。中国历代人物传记资料库（CBDB）以人物编号 266593 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王次學 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_z4aCxcZmXAafGUnNufCVpV | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王次學（CBDB 266593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266593&o=json)
- [中国历代人物传记资料库：王重（CBDB 198394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198394&o=json)
