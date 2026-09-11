---
schema: wang-person/v1
id: p_F9yERjjQBM67M34rE2CpM6
status: active
merged_into: null
display_name: 王祖毓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMM8WWc7PVXVL6eUcebH7j
        subject_person_id: p_F9yERjjQBM67M34rE2CpM6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖毓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xu9bMVes11dsekjaD3m9hk
          claim_id: c_DMM8WWc7PVXVL6eUcebH7j
          source_id: s_szcFvae3FgtQAhbeN3zr4b
          stance: supports
          locator: CBDB:639573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639573）
          source: &a1
            id: s_szcFvae3FgtQAhbeN3zr4b
            source_type: api_record
            title: 中国历代人物传记资料库：王祖毓（CBDB 639573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639573&o=json
            external_identifier: CBDB:639573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FXsrjf12A259Yg12dLuCvs
        subject_person_id: p_F9yERjjQBM67M34rE2CpM6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖毓，清人物。籍贯東湖，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639573）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_s3dF3PL4Chbd3jmfv1BWTw
          claim_id: c_FXsrjf12A259Yg12dLuCvs
          source_id: s_szcFvae3FgtQAhbeN3zr4b
          stance: supports
          locator: CBDB:639573
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

# 王祖毓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祖毓 | accepted |
| bio.summary | 王祖毓，清人物。籍贯東湖，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 639573） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖毓（CBDB 639573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639573&o=json)
