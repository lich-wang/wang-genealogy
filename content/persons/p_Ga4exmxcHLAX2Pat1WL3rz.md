---
schema: wang-person/v1
id: p_Ga4exmxcHLAX2Pat1WL3rz
status: active
merged_into: null
display_name: 王貞鎰
cbdb_id: 156110
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QkWWYPJaQ893VvRE4ZBkC3
        subject_person_id: p_Ga4exmxcHLAX2Pat1WL3rz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞鎰，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156110 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_T4k7unN86PAbXzbn5TIUzx
          claim_id: c_QkWWYPJaQ893VvRE4ZBkC3
          source_id: s_fgH8Skc92SHdTFFJ3cnj35
          stance: supports
          locator: CBDB:156110
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fgH8Skc92SHdTFFJ3cnj35
            source_type: api_record
            title: 中国历代人物传记资料库：王貞鎰（CBDB 156110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156110&o=json
            external_identifier: CBDB:156110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wYGf8ijmtgAJjYkierA14h
        subject_person_id: p_Ga4exmxcHLAX2Pat1WL3rz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wzjm4U1EH1FW5D6hQyKaPD
          claim_id: c_wYGf8ijmtgAJjYkierA14h
          source_id: s_fgH8Skc92SHdTFFJ3cnj35
          stance: supports
          locator: CBDB:156110
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_fgH8Skc92SHdTFFJ3cnj35
            source_type: api_record
            title: 中国历代人物传记资料库：王貞鎰（CBDB 156110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156110&o=json
            external_identifier: CBDB:156110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oNuT_b_JXunquRrc5okT0v
        subject_person_id: p_7QrhcSCpByfzYfPYz7zK5h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ga4exmxcHLAX2Pat1WL3rz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2mE0JVkyesAcXb3pAgi_NX
          claim_id: c_oNuT_b_JXunquRrc5okT0v
          source_id: s_fgH8Skc92SHdTFFJ3cnj35
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 126：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QrhcSCpByfzYfPYz7zK5h
        status: active
        display_name: 王支某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貞鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貞鎰，唐人物。中国历代人物传记资料库（CBDB）以人物编号 156110 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王貞鎰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7QrhcSCpByfzYfPYz7zK5h | 王支某 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞鎰（CBDB 156110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156110&o=json)
