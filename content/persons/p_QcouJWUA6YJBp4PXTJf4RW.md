---
schema: wang-person/v1
id: p_QcouJWUA6YJBp4PXTJf4RW
status: active
merged_into: null
display_name: 王師震
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tJH4e5kYLCEQKFHFJiZD6B
        subject_person_id: p_QcouJWUA6YJBp4PXTJf4RW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fEHh1tQY84zsYwpmgH4egB
          claim_id: c_tJH4e5kYLCEQKFHFJiZD6B
          source_id: s_rbAHhsaNGUBDLFUhMxEn1F
          stance: supports
          locator: CBDB:555069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555069）
          source: &a1
            id: s_rbAHhsaNGUBDLFUhMxEn1F
            source_type: api_record
            title: 中国历代人物传记资料库：王師震（CBDB 555069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555069&o=json
            external_identifier: CBDB:555069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.626Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WoUTNR6iKJprAGuZnGpK1f
        subject_person_id: p_QcouJWUA6YJBp4PXTJf4RW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師震，清人物。籍贯南召，身份为孝子/孝女，入仕邑庠生。（中国历代人物传记资料库 CBDB 555069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YYmNAGLjSjsVCplooAlrh-
          claim_id: c_WoUTNR6iKJprAGuZnGpK1f
          source_id: s_rbAHhsaNGUBDLFUhMxEn1F
          stance: supports
          locator: CBDB:555069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hAow43_2Fz1eWTAI4KLStG
        subject_person_id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QcouJWUA6YJBp4PXTJf4RW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jPsKH0pgBeA8K9_dlEZuKH
          claim_id: c_hAow43_2Fz1eWTAI4KLStG
          source_id: s_rbAHhsaNGUBDLFUhMxEn1F
          stance: supports
          locator: 南陽府志，lgid=878691-878692：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w1GiHCCDCJVq4Cbb8yEdBZ
        status: active
        display_name: 王之政
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師震 | accepted |
| bio.summary | 王師震，清人物。籍贯南召，身份为孝子/孝女，入仕邑庠生。（中国历代人物传记资料库 CBDB 555069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w1GiHCCDCJVq4Cbb8yEdBZ | 王之政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師震（CBDB 555069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555069&o=json)
