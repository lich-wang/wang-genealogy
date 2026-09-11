---
schema: wang-person/v1
id: p_mps1qECYgUC1C9UWdUCvL5
status: active
merged_into: null
display_name: 王文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_t5LN3tXT5zAvHzxidivEt6
        subject_person_id: p_mps1qECYgUC1C9UWdUCvL5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lhe1Md8LhLcoNfbhGWDXeJ
          claim_id: c_t5LN3tXT5zAvHzxidivEt6
          source_id: s_57hGgtdi2MvAPD5XmJdAyo
          stance: supports
          locator: CBDB:280829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280829）
          source: &a1
            id: s_57hGgtdi2MvAPD5XmJdAyo
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 280829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280829&o=json
            external_identifier: CBDB:280829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xXprEjYZVbQQQfpYozBvJx
        subject_person_id: p_mps1qECYgUC1C9UWdUCvL5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280829）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YTK399NxibDlGPOL-_1733
          claim_id: c_xXprEjYZVbQQQfpYozBvJx
          source_id: s_57hGgtdi2MvAPD5XmJdAyo
          stance: supports
          locator: CBDB:280829
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
        id: c_l3aFaVevieqZczlx4IANEV
        subject_person_id: p_mps1qECYgUC1C9UWdUCvL5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jLDf1hepk8fQ34x7RwZJFA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTzSAmRVg8WPYw-h828RKs
          claim_id: c_l3aFaVevieqZczlx4IANEV
          source_id: s_ATpo2LhfLVj3EbJKGTwGF6
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ATpo2LhfLVj3EbJKGTwGF6
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 201938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201938&o=json
            external_identifier: CBDB:201938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.704Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jLDf1hepk8fQ34x7RwZJFA
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  other: []
---

# 王文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文 | accepted |
| bio.summary | 王文，明人物。正德十二年進士。（中国历代人物传记资料库 CBDB 280829） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_jLDf1hepk8fQ34x7RwZJFA | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 201938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201938&o=json)
- [中国历代人物传记资料库：王文（CBDB 280829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280829&o=json)
