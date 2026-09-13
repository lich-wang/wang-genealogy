---
schema: wang-person/v1
id: p_FYLvHDnSxXgRduKw9zQjET
status: active
merged_into: null
display_name: 王論
cbdb_id: 158866
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bDfhMVYsX6ZsEp17rfbLAK
        subject_person_id: p_FYLvHDnSxXgRduKw9zQjET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王論，史料所见人物。本项目依据《中国历代人物传记资料库：王論（CBDB 158866）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_5cURUXzMCN32r2Ai5kTtUR
          claim_id: c_bDfhMVYsX6ZsEp17rfbLAK
          source_id: s_bxwW7BPcYrDyLijDLJeKN2
          stance: supports
          locator: CBDB:158866
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_bxwW7BPcYrDyLijDLJeKN2
            source_type: api_record
            title: 中国历代人物传记资料库：王論（CBDB 158866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158866&o=json
            external_identifier: CBDB:158866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5EEs5g8DKCXmHjmf5Gu3L1
        subject_person_id: p_FYLvHDnSxXgRduKw9zQjET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王論
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ecPmBC8iMCGhBgAe8y9nB7
          claim_id: c_5EEs5g8DKCXmHjmf5Gu3L1
          source_id: s_bxwW7BPcYrDyLijDLJeKN2
          stance: supports
          locator: CBDB:158866
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__wlfLCv6Sy45zYDWmh3fsZ
        subject_person_id: p_FYLvHDnSxXgRduKw9zQjET
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9V8s84od5ZmB9RMgrFpSAN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_coV-FQuXoQzNSCs1meuiYT
          claim_id: c__wlfLCv6Sy45zYDWmh3fsZ
          source_id: s_SJCVM2ubkk486ddmMLdHvC
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SJCVM2ubkk486ddmMLdHvC
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 158867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158867&o=json
            external_identifier: CBDB:158867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9V8s84od5ZmB9RMgrFpSAN
        status: active
        display_name: 王濬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_DLknoqehvLvtTatcxFfT0k
        subject_person_id: p_FYLvHDnSxXgRduKw9zQjET
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JbrJcaN3MdnZ95DCfhnHwS
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLlA-dfkwLdYt3JxZWTf2w
          claim_id: c_DLknoqehvLvtTatcxFfT0k
          source_id: s_bxwW7BPcYrDyLijDLJeKN2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 56：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bxwW7BPcYrDyLijDLJeKN2
            source_type: api_record
            title: 中国历代人物传记资料库：王論（CBDB 158866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158866&o=json
            external_identifier: CBDB:158866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JbrJcaN3MdnZ95DCfhnHwS
        status: active
        display_name: 王惲
        merged_into_person_id: null
  other: []
---

# 王論

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王論，史料所见人物。本项目依据《中国历代人物传记资料库：王論（CBDB 158866）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王論 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9V8s84od5ZmB9RMgrFpSAN | 王濬 | accepted |
| descendants | p_JbrJcaN3MdnZ95DCfhnHwS | 王惲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濬（CBDB 158867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158867&o=json)
- [中国历代人物传记资料库：王論（CBDB 158866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158866&o=json)
