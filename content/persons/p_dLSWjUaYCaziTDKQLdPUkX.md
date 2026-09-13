---
schema: wang-person/v1
id: p_dLSWjUaYCaziTDKQLdPUkX
status: merged
merged_into: p_AzchV2gadaNThZJMv4i97k
display_name: 王輝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KcdQRPF2bmM7SXD37LwvBa
        subject_person_id: p_dLSWjUaYCaziTDKQLdPUkX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TSvbjqh2uc2EJQCqDaAgP3
          claim_id: c_KcdQRPF2bmM7SXD37LwvBa
          source_id: s_E2fDha9q9PP5juHdwi5GSe
          stance: supports
          locator: CBDB:37868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37868）
          source: &a1
            id: s_E2fDha9q9PP5juHdwi5GSe
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 37868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37868&o=json
            external_identifier: CBDB:37868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q81CdHgUr9191kKq76YcwX
        subject_person_id: p_dLSWjUaYCaziTDKQLdPUkX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝，宋人物。籍贯錢塘，身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 37868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mzBM1zsVPsMBxENggJqZHe
          claim_id: c_Q81CdHgUr9191kKq76YcwX
          source_id: s_E2fDha9q9PP5juHdwi5GSe
          stance: supports
          locator: CBDB:37868
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

# 王輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝 | accepted |
| bio.summary | 王輝，宋人物。籍贯錢塘，身份为畫家，曾任翰林圖畫院待詔。（中国历代人物传记资料库 CBDB 37868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輝（CBDB 37868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37868&o=json)
