---
schema: wang-person/v1
id: p_GSjakwc9qcDmQzVRm7NrP8
status: active
merged_into: null
display_name: 王表
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zkwFRcZYQNjw4Bku44uy13
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Yuxpu2ZvgcXLKFjA7f8PXP
          claim_id: c_zkwFRcZYQNjw4Bku44uy13
          source_id: s_p3nGCqtTSnSLjG3n8CLpAJ
          stance: supports
          locator: CBDB:295410
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295410）
          source: &a1
            id: s_p3nGCqtTSnSLjG3n8CLpAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 295410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295410&o=json
            external_identifier: CBDB:295410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.500Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yuis2ZHT6VMUEdgoJ9v6S2
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，明人物。嘉靖十四年進士，籍贯無錫，曾任禮部主事。（中国历代人物传记资料库 CBDB 295410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WN8EN3rtqpU8TlxOs-5HXR
          claim_id: c_Yuis2ZHT6VMUEdgoJ9v6S2
          source_id: s_p3nGCqtTSnSLjG3n8CLpAJ
          stance: supports
          locator: CBDB:295410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y2LIJVoIYDhzWigCe6glkm
        subject_person_id: p_GSjakwc9qcDmQzVRm7NrP8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ghgtseEJkUC2ybxjB2cf7v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wr-GBSjN0M62i9bMKrm6Fx
          claim_id: c_Y2LIJVoIYDhzWigCe6glkm
          source_id: s_MUbNoy15BYcB1rfWzY7dYg
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MUbNoy15BYcB1rfWzY7dYg
            source_type: api_record
            title: 中国历代人物传记资料库：王立道（CBDB 34712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json
            external_identifier: CBDB:34712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.094Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ghgtseEJkUC2ybxjB2cf7v
        status: active
        display_name: 王立道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，明人物。嘉靖十四年進士，籍贯無錫，曾任禮部主事。（中国历代人物传记资料库 CBDB 295410） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ghgtseEJkUC2ybxjB2cf7v | 王立道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 295410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295410&o=json)
- [中国历代人物传记资料库：王立道（CBDB 34712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34712&o=json)
