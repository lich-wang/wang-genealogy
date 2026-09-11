---
schema: wang-person/v1
id: p_zHFe8c3VTHTkTyDACgPegD
status: active
merged_into: null
display_name: 王道凝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ifaDGXP1aSNtZHLGFNUi1E
        subject_person_id: p_zHFe8c3VTHTkTyDACgPegD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道凝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RiZTRLHtZdnDiniuRKSgiD
          claim_id: c_ifaDGXP1aSNtZHLGFNUi1E
          source_id: s_s36r2dJAiMXdsCEqMW2TL9
          stance: supports
          locator: CBDB:342858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342858）
          source: &a1
            id: s_s36r2dJAiMXdsCEqMW2TL9
            source_type: api_record
            title: 中国历代人物传记资料库：王道凝（CBDB 342858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342858&o=json
            external_identifier: CBDB:342858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MRNQ2Nj1fnLYZP9WPoN11L
        subject_person_id: p_zHFe8c3VTHTkTyDACgPegD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道凝，清人物。明清進士進士，籍贯鉅野，入仕進士。（中国历代人物传记资料库 CBDB 342858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zX6VLiEDaJI5f-U1VZBDjM
          claim_id: c_MRNQ2Nj1fnLYZP9WPoN11L
          source_id: s_s36r2dJAiMXdsCEqMW2TL9
          stance: supports
          locator: CBDB:342858
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

# 王道凝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道凝 | accepted |
| bio.summary | 王道凝，清人物。明清進士進士，籍贯鉅野，入仕進士。（中国历代人物传记资料库 CBDB 342858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道凝（CBDB 342858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342858&o=json)
