---
schema: wang-person/v1
id: p_466nsxZ3JM344kFn5S3u9k
status: active
merged_into: null
display_name: 王元敬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vB14WUzVr3RTKTakWVNJHk
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yT6Jc2J8GN5voTrSJGzm3P
          claim_id: c_vB14WUzVr3RTKTakWVNJHk
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: CBDB:126472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126472）
          source: &a1
            id: s_YADBmndHasVQP6F7cTjsWo
            source_type: api_record
            title: 中国历代人物传记资料库：王元敬（CBDB 126472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json
            external_identifier: CBDB:126472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q1PnTrAmKvXu9nrA2jEtUZ
        subject_person_id: p_466nsxZ3JM344kFn5S3u9k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bik4Fchz55DreA8ZnKy6fn
          claim_id: c_q1PnTrAmKvXu9nrA2jEtUZ
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_S0RJByTsXA3Z6Epf51YxGy
        subject_person_id: p_Xkz67ssYdvVFhpUXFfA7PF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1aV7ePEPInXoozFqNEa2i
          claim_id: c_S0RJByTsXA3Z6Epf51YxGy
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Xkz67ssYdvVFhpUXFfA7PF
        status: active
        display_name: 王碩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Gn-m0B2a-5nCvaFb3wa0Ph
        subject_person_id: p_P4mJEuKpDxNxzBjCYpJw6X
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSlM5OTlwcq7BnfniNPeL-
          claim_id: c_Gn-m0B2a-5nCvaFb3wa0Ph
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P4mJEuKpDxNxzBjCYpJw6X
        status: active
        display_name: 王璋
        merged_into_person_id: null
    - claim:
        id: c_VCGbyGR4c41Ma2kmslziSN
        subject_person_id: p_8CJFeTpK8MJ11yEnUGi9hH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_466nsxZ3JM344kFn5S3u9k
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MTtqxXePRABoFx3-L4bSz3
          claim_id: c_VCGbyGR4c41Ma2kmslziSN
          source_id: s_YADBmndHasVQP6F7cTjsWo
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第二甲第二十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8CJFeTpK8MJ11yEnUGi9hH
        status: active
        display_name: 王暐
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xkz67ssYdvVFhpUXFfA7PF | 王碩 | accepted |
| ancestors | p_P4mJEuKpDxNxzBjCYpJw6X | 王璋 | accepted |
| ancestors | p_8CJFeTpK8MJ11yEnUGi9hH | 王暐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元敬（CBDB 126472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126472&o=json)
