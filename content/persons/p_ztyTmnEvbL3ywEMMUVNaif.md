---
schema: wang-person/v1
id: p_ztyTmnEvbL3ywEMMUVNaif
status: active
merged_into: null
display_name: 王倬漢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X8vMu6pDfV95MBPmRy1CKE
        subject_person_id: p_ztyTmnEvbL3ywEMMUVNaif
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倬漢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42z3qwviLsArXm9DspJxoK
          claim_id: c_X8vMu6pDfV95MBPmRy1CKE
          source_id: s_brpPixKBm287oMbw2xRhvh
          stance: supports
          locator: CBDB:636082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636082）
          source: &a1
            id: s_brpPixKBm287oMbw2xRhvh
            source_type: api_record
            title: 中国历代人物传记资料库：王倬漢（CBDB 636082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636082&o=json
            external_identifier: CBDB:636082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z8AjZKbKNPwNfUhHj5aLSL
        subject_person_id: p_ztyTmnEvbL3ywEMMUVNaif
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王倬漢，清人物。籍贯清江，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 636082）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TVTqrY1sd7vIIt6-oFkenS
          claim_id: c_z8AjZKbKNPwNfUhHj5aLSL
          source_id: s_brpPixKBm287oMbw2xRhvh
          stance: supports
          locator: CBDB:636082
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

# 王倬漢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倬漢 | accepted |
| bio.summary | 王倬漢，清人物。籍贯清江，入仕貢生: 拔貢，曾任主事。（中国历代人物传记资料库 CBDB 636082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王倬漢（CBDB 636082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636082&o=json)
