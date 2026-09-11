---
schema: wang-person/v1
id: p_DTfTgBqPVmmY39EnxBDvEJ
status: active
merged_into: null
display_name: 王吳婆
cbdb_id: 156461
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sMZHc68DmJuU7geBShrwaY
        subject_person_id: p_DTfTgBqPVmmY39EnxBDvEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吳婆，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156461 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_9GOQlJD2dmCsbBbLsSb6gj
          claim_id: c_sMZHc68DmJuU7geBShrwaY
          source_id: s_qk4K8dp8QKA2GkFUAsDGpK
          stance: supports
          locator: CBDB:156461
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qk4K8dp8QKA2GkFUAsDGpK
            source_type: api_record
            title: 中国历代人物传记资料库：王吳婆（CBDB 156461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156461&o=json
            external_identifier: CBDB:156461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8TmU41SvhydAAmmWcXaGS
        subject_person_id: p_DTfTgBqPVmmY39EnxBDvEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吳婆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TeTJRQ7dxW4zQNQhqiXUrz
          claim_id: c_Q8TmU41SvhydAAmmWcXaGS
          source_id: s_qk4K8dp8QKA2GkFUAsDGpK
          stance: supports
          locator: CBDB:156461
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_qk4K8dp8QKA2GkFUAsDGpK
            source_type: api_record
            title: 中国历代人物传记资料库：王吳婆（CBDB 156461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156461&o=json
            external_identifier: CBDB:156461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_o2M0AXGLOCOwiqYF3f-ThQ
        subject_person_id: p_3WXtv2kcWPVKbpetC94s5m
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DTfTgBqPVmmY39EnxBDvEJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DpHP4Q97AEG7eLhD__Esnw
          claim_id: c_o2M0AXGLOCOwiqYF3f-ThQ
          source_id: s_qk4K8dp8QKA2GkFUAsDGpK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 33：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3WXtv2kcWPVKbpetC94s5m
        status: active
        display_name: 王叔雅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王吳婆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王吳婆，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156461 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王吳婆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3WXtv2kcWPVKbpetC94s5m | 王叔雅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吳婆（CBDB 156461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156461&o=json)
