---
schema: wang-person/v1
id: p_CPb2pfWGKo6yfsuhL9bKLn
status: active
merged_into: null
display_name: 王劉老
cbdb_id: 158108
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7SiCLNJqrcgJQeeNLHsaq6
        subject_person_id: p_CPb2pfWGKo6yfsuhL9bKLn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劉老，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158108 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rmL400lGLInHai2OXGcnGQ
          claim_id: c_7SiCLNJqrcgJQeeNLHsaq6
          source_id: s_YDs2JHRNhDj6Q6QE6TZyUe
          stance: supports
          locator: CBDB:158108
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YDs2JHRNhDj6Q6QE6TZyUe
            source_type: api_record
            title: 中国历代人物传记资料库：王劉老（CBDB 158108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158108&o=json
            external_identifier: CBDB:158108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pm5eEb18uex1knKmC9QEFq
        subject_person_id: p_CPb2pfWGKo6yfsuhL9bKLn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王劉老
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dcSJmwXU6LfNxBosedH22t
          claim_id: c_Pm5eEb18uex1knKmC9QEFq
          source_id: s_YDs2JHRNhDj6Q6QE6TZyUe
          stance: supports
          locator: CBDB:158108
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_YDs2JHRNhDj6Q6QE6TZyUe
            source_type: api_record
            title: 中国历代人物传记资料库：王劉老（CBDB 158108）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158108&o=json
            external_identifier: CBDB:158108
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dl3XCwPd2Vgv9NDhFByv5s
        subject_person_id: p_kVMprEyYd61FrSnBQEVsST
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CPb2pfWGKo6yfsuhL9bKLn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kxhiwbXpip0NS4bVNzTBF0
          claim_id: c_dl3XCwPd2Vgv9NDhFByv5s
          source_id: s_YDs2JHRNhDj6Q6QE6TZyUe
          stance: supports
          locator: 唐代墓誌匯編:二卷，Dahe 94：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kVMprEyYd61FrSnBQEVsST
        status: active
        display_name: 王仕倫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王劉老

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王劉老，唐人物。中国历代人物传记资料库（CBDB）以人物编号 158108 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王劉老 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kVMprEyYd61FrSnBQEVsST | 王仕倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王劉老（CBDB 158108）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158108&o=json)
