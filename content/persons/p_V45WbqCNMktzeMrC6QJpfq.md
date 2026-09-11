---
schema: wang-person/v1
id: p_V45WbqCNMktzeMrC6QJpfq
status: active
merged_into: null
display_name: 王穩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ELNRzdE2vvs8APH513Z9jX
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t9zA9Ajt2ondC3pLMz8Zi7
          claim_id: c_ELNRzdE2vvs8APH513Z9jX
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: CBDB:266955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266955）
          source: &a1
            id: s_XGB9gC8r39Aj1xFmkkAGHP
            source_type: api_record
            title: 中国历代人物传记资料库：王穩（CBDB 266955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json
            external_identifier: CBDB:266955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQELk6Jbc8LkD5xm1oPzkD
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穩，明人物。弘治九年進士，曾任知府。（中国历代人物传记资料库 CBDB 266955）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JLVKsc_BW1RiDUi17SQ59L
          claim_id: c_DQELk6Jbc8LkD5xm1oPzkD
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: CBDB:266955
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
  descendants:
    - claim:
        id: c_HiceCJ_bAH381bVgzNO6-A
        subject_person_id: p_V45WbqCNMktzeMrC6QJpfq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y5MBeWZ8dxXVGHrOtyUA2H
          claim_id: c_HiceCJ_bAH381bVgzNO6-A
          source_id: s_XGB9gC8r39Aj1xFmkkAGHP
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第二甲第十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fG2ZSSsFcXdaZWCtjXUkRA
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
  other: []
---

# 王穩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穩 | accepted |
| bio.summary | 王穩，明人物。弘治九年進士，曾任知府。（中国历代人物传记资料库 CBDB 266955） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fG2ZSSsFcXdaZWCtjXUkRA | 王朝卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穩（CBDB 266955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266955&o=json)
