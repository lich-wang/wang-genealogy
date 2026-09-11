---
schema: wang-person/v1
id: p_vkvG2A7ta6iDdauCDcP2NZ
status: active
merged_into: null
display_name: 王三娘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ioPFTRX6xFvKwXS6XgEaDQ
        subject_person_id: p_vkvG2A7ta6iDdauCDcP2NZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5chXBhhspE2RDPJi7XpSXd
          claim_id: c_ioPFTRX6xFvKwXS6XgEaDQ
          source_id: s_GEfHQZcQU3k7m51A2poAEo
          stance: supports
          locator: CBDB:167693
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167693）
          source: &a1
            id: s_GEfHQZcQU3k7m51A2poAEo
            source_type: api_record
            title: 中国历代人物传记资料库：王三娘（CBDB 167693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167693&o=json
            external_identifier: CBDB:167693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XxRNp5q3wb1VYRfYJ1pAhC
        subject_person_id: p_vkvG2A7ta6iDdauCDcP2NZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三娘，史料所见人物。本项目依据《中国历代人物传记资料库：王三娘（CBDB 167693）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8XcYSom3Cqm3otFVGpbs7m
          claim_id: c_XxRNp5q3wb1VYRfYJ1pAhC
          source_id: s_GEfHQZcQU3k7m51A2poAEo
          stance: supports
          locator: CBDB:167693
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8FqgVvkAVGINWEFFiiYfMd
        subject_person_id: p_yw8Ldi3TsRvFBDPd73FPjN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vkvG2A7ta6iDdauCDcP2NZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKckdRvXIZ4cWeLt-ACLDs
          claim_id: c_8FqgVvkAVGINWEFFiiYfMd
          source_id: s_GEfHQZcQU3k7m51A2poAEo
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dazhong75：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yw8Ldi3TsRvFBDPd73FPjN
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王三娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三娘 | accepted |
| bio.summary | 王三娘，史料所见人物。本项目依据《中国历代人物传记资料库：王三娘（CBDB 167693）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yw8Ldi3TsRvFBDPd73FPjN | 王玉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三娘（CBDB 167693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167693&o=json)
