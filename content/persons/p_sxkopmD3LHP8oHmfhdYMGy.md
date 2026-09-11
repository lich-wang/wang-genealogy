---
schema: wang-person/v1
id: p_sxkopmD3LHP8oHmfhdYMGy
status: active
merged_into: null
display_name: 王重
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zXSDuJKFmMHetEchBz84jG
        subject_person_id: p_sxkopmD3LHP8oHmfhdYMGy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oXnTF9K8RK3T2FAaKnrSUw
          claim_id: c_zXSDuJKFmMHetEchBz84jG
          source_id: s_3fB1L6ZTERqRMSJBKU5HCt
          stance: supports
          locator: CBDB:220836
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220836）
          source: &a1
            id: s_3fB1L6ZTERqRMSJBKU5HCt
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 220836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220836&o=json
            external_identifier: CBDB:220836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p9FtLJPzz2pozTA69NbjPR
        subject_person_id: p_sxkopmD3LHP8oHmfhdYMGy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220836）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H4BDTHzQQOiL66rfJpbL6k
          claim_id: c_p9FtLJPzz2pozTA69NbjPR
          source_id: s_3fB1L6ZTERqRMSJBKU5HCt
          stance: supports
          locator: CBDB:220836
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
        id: c_tM8UghcxQs_sYZIe6JLOZY
        subject_person_id: p_sxkopmD3LHP8oHmfhdYMGy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DxMro6Z24bPYtmEPhHPt4K
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uGYKsDKkbB-kOlPrrZnTe4
          claim_id: c_tM8UghcxQs_sYZIe6JLOZY
          source_id: s_3fB1L6ZTERqRMSJBKU5HCt
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第一百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DxMro6Z24bPYtmEPhHPt4K
        status: active
        display_name: 王麟趾
        merged_into_person_id: null
  other: []
---

# 王重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重 | accepted |
| bio.summary | 王重，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 220836） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DxMro6Z24bPYtmEPhHPt4K | 王麟趾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王重（CBDB 220836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220836&o=json)
