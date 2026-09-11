---
schema: wang-person/v1
id: p_Fqf98231G66GDJtjxHT3fS
status: active
merged_into: null
display_name: 王孝遠
cbdb_id: 151071
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xaZVRiTJS3dsgyALyK22VU
        subject_person_id: p_Fqf98231G66GDJtjxHT3fS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝遠，隋人物。中国历代人物传记资料库（CBDB）以人物编号 151071 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_T_o79X3cXx7dWrmNq_ldLQ
          claim_id: c_xaZVRiTJS3dsgyALyK22VU
          source_id: s_vLGYkQBkgYftAJ6TpVh7F9
          stance: supports
          locator: CBDB:151071
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_vLGYkQBkgYftAJ6TpVh7F9
            source_type: api_record
            title: 中国历代人物传记资料库：王孝遠（CBDB 151071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151071&o=json
            external_identifier: CBDB:151071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xrzwgo4TcduU2FdmQ3kyM2
        subject_person_id: p_Fqf98231G66GDJtjxHT3fS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_An6bC7m8AFZ1X8QRnD65y8
          claim_id: c_Xrzwgo4TcduU2FdmQ3kyM2
          source_id: s_vLGYkQBkgYftAJ6TpVh7F9
          stance: supports
          locator: CBDB:151071
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 隋
          source:
            id: s_vLGYkQBkgYftAJ6TpVh7F9
            source_type: api_record
            title: 中国历代人物传记资料库：王孝遠（CBDB 151071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151071&o=json
            external_identifier: CBDB:151071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_NcM4CrYsMmIRdZm4OOdo6l
        subject_person_id: p_Fqf98231G66GDJtjxHT3fS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvTW8uNTkyPJAAx88TaQxP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XkCI8snU03Lo-OHRoTy6AF
          claim_id: c_NcM4CrYsMmIRdZm4OOdo6l
          source_id: s_kB3W2yNxf43r1PskB2MwDM
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kB3W2yNxf43r1PskB2MwDM
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 151072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151072&o=json
            external_identifier: CBDB:151072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RvTW8uNTkyPJAAx88TaQxP
        status: active
        display_name: 王崇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王孝遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝遠，隋人物。中国历代人物传记资料库（CBDB）以人物编号 151071 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王孝遠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RvTW8uNTkyPJAAx88TaQxP | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 151072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151072&o=json)
- [中国历代人物传记资料库：王孝遠（CBDB 151071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151071&o=json)
