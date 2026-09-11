---
schema: wang-person/v1
id: p_6SDy3bF7CQQgYA5jaz9rmc
status: active
merged_into: null
display_name: 王誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YH2hzJ8x4RS7aZ1wAo24Dh
        subject_person_id: p_6SDy3bF7CQQgYA5jaz9rmc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JP4oPr3qtND5WXiWTwfCrN
          claim_id: c_YH2hzJ8x4RS7aZ1wAo24Dh
          source_id: s_BqoY5UjRJXJ492gM2etwt8
          stance: supports
          locator: CBDB:280985
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280985）
          source: &a1
            id: s_BqoY5UjRJXJ492gM2etwt8
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 280985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280985&o=json
            external_identifier: CBDB:280985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fQdKuUWLJoRtKdmgfimxpb
        subject_person_id: p_6SDy3bF7CQQgYA5jaz9rmc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誠，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280985）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-UhDiNeW22-1Ep8WqjWRYh
          claim_id: c_fQdKuUWLJoRtKdmgfimxpb
          source_id: s_BqoY5UjRJXJ492gM2etwt8
          stance: supports
          locator: CBDB:280985
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
        id: c_sw6ngN4elvWaIfrowcsBF_
        subject_person_id: p_6SDy3bF7CQQgYA5jaz9rmc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5e-6G-yd-zgeRk0viHtMM
          claim_id: c_sw6ngN4elvWaIfrowcsBF_
          source_id: s_BqoY5UjRJXJ492gM2etwt8
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJXudkaLuCHVbmiCeKBv45
        status: active
        display_name: 王官
        merged_into_person_id: null
  other: []
---

# 王誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誠 | accepted |
| bio.summary | 王誠，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280985） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_XJXudkaLuCHVbmiCeKBv45 | 王官 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 280985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280985&o=json)
