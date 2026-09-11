---
schema: wang-person/v1
id: p_JNN9WR7n7FEn9er8Z1w33L
status: active
merged_into: null
display_name: 王㔠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZQR2kozDdaZvVGcZV31vL
        subject_person_id: p_JNN9WR7n7FEn9er8Z1w33L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㔠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rs4wARJUWEHpTkEETeA3SJ
          claim_id: c_aZQR2kozDdaZvVGcZV31vL
          source_id: s_AnG4fdj6xtLPe21P6eRFdr
          stance: supports
          locator: CBDB:578612
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（578612）
          source: &a1
            id: s_AnG4fdj6xtLPe21P6eRFdr
            source_type: api_record
            title: 中国历代人物传记资料库：王㔠（CBDB 578612）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578612&o=json
            external_identifier: CBDB:578612
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.731Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S4eGiCCywshBWzoxN51uPi
        subject_person_id: p_JNN9WR7n7FEn9er8Z1w33L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王㔠，清人物。籍贯長安，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 578612）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ioE_Ij4Ofyd1Mi7m40LBIa
          claim_id: c_S4eGiCCywshBWzoxN51uPi
          source_id: s_AnG4fdj6xtLPe21P6eRFdr
          stance: supports
          locator: CBDB:578612
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
  ancestors:
    - claim:
        id: c_LVm-t_a8MBJMf4ifYmVpZ3
        subject_person_id: p_XBdYGhhY6KYRHheCG3YBMX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JNN9WR7n7FEn9er8Z1w33L
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BmXp-UxDVPazoorGE-wtMh
          claim_id: c_LVm-t_a8MBJMf4ifYmVpZ3
          source_id: s_AnG4fdj6xtLPe21P6eRFdr
          stance: supports
          locator: 長安縣志，488：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XBdYGhhY6KYRHheCG3YBMX
        status: active
        display_name: 王平
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王㔠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王㔠 | accepted |
| bio.summary | 王㔠，清人物。籍贯長安，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 578612） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_XBdYGhhY6KYRHheCG3YBMX | 王平 | accepted |

## 外部来源

- [中国历代人物传记资料库：王㔠（CBDB 578612）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=578612&o=json)
