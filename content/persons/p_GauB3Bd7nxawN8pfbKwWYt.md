---
schema: wang-person/v1
id: p_GauB3Bd7nxawN8pfbKwWYt
status: active
merged_into: null
display_name: 王廷翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bdHfDV4RvwvkEQV3Fk2Tva
        subject_person_id: p_GauB3Bd7nxawN8pfbKwWYt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bsAWeUtDXBJqBpjazHvCUw
          claim_id: c_bdHfDV4RvwvkEQV3Fk2Tva
          source_id: s_YxSG5Q9yuKef7fQ9Gt8rPr
          stance: supports
          locator: CBDB:548169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（548169）
          source: &a1
            id: s_YxSG5Q9yuKef7fQ9Gt8rPr
            source_type: api_record
            title: 中国历代人物传记资料库：王廷翰（CBDB 548169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548169&o=json
            external_identifier: CBDB:548169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FUDqS2nSRpR7mK3daRuEgg
        subject_person_id: p_GauB3Bd7nxawN8pfbKwWYt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷翰，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548169）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FCHjt-pQhlVlOtfo7RcSSd
          claim_id: c_FUDqS2nSRpR7mK3daRuEgg
          source_id: s_YxSG5Q9yuKef7fQ9Gt8rPr
          stance: supports
          locator: CBDB:548169
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

# 王廷翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷翰 | accepted |
| bio.summary | 王廷翰，宋人物。籍贯遂寧，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 548169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷翰（CBDB 548169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=548169&o=json)
