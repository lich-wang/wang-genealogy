---
schema: wang-person/v1
id: p_JN3p5gc3688oH1DNZoKKhh
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bNMBBnLaBSNKpqTowntu1V
        subject_person_id: p_JN3p5gc3688oH1DNZoKKhh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ekJeoFMad78BVPZVr4LF1K
          claim_id: c_bNMBBnLaBSNKpqTowntu1V
          source_id: s_bSJBe8BWJmC66JDAy8YqJX
          stance: supports
          locator: CBDB:686318
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686318）
          source: &a1
            id: s_bSJBe8BWJmC66JDAy8YqJX
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 686318）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686318&o=json
            external_identifier: CBDB:686318
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lm15XWMLua4rKbWrgiMxCJ
        subject_person_id: p_JN3p5gc3688oH1DNZoKKhh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕，宋人物。籍贯和州，入仕進士。（中国历代人物传记资料库 CBDB 686318）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eYmpLOSU9wHGKyxKeaT_zl
          claim_id: c_Lm15XWMLua4rKbWrgiMxCJ
          source_id: s_bSJBe8BWJmC66JDAy8YqJX
          stance: supports
          locator: CBDB:686318
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| bio.summary | 王冕，宋人物。籍贯和州，入仕進士。（中国历代人物传记资料库 CBDB 686318） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 686318）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686318&o=json)
