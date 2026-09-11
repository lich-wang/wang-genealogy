---
schema: wang-person/v1
id: p_5RnQXWmBZ64xZ1jtcqT6DG
status: active
merged_into: null
display_name: 王休
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_weDzc1GAtC4Yk1JgDiL2D7
        subject_person_id: p_5RnQXWmBZ64xZ1jtcqT6DG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBAjVnQKEMGnrrmYNoTzkz
          claim_id: c_weDzc1GAtC4Yk1JgDiL2D7
          source_id: s_S78XJYRb1Mfq5acrQmz1G7
          stance: supports
          locator: CBDB:38767
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38767）
          source: &a1
            id: s_S78XJYRb1Mfq5acrQmz1G7
            source_type: api_record
            title: 中国历代人物传记资料库：王休（CBDB 38767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38767&o=json
            external_identifier: CBDB:38767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.548Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pk2W8tsz7HAAFfZ8rRrnvL
        subject_person_id: p_5RnQXWmBZ64xZ1jtcqT6DG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休，宋人物。籍贯慈溪，身份为金石學家，入仕進士，曾任判樞密院事。（中国历代人物传记资料库 CBDB 38767）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ozmzB11UVw4i1_vfDSeZsU
          claim_id: c_Pk2W8tsz7HAAFfZ8rRrnvL
          source_id: s_S78XJYRb1Mfq5acrQmz1G7
          stance: supports
          locator: CBDB:38767
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
  descendants: []
  other: []
---

# 王休

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休 | accepted |
| bio.summary | 王休，宋人物。籍贯慈溪，身份为金石學家，入仕進士，曾任判樞密院事。（中国历代人物传记资料库 CBDB 38767） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王休（CBDB 38767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38767&o=json)
