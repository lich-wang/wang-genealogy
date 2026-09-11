---
schema: wang-person/v1
id: p_XgxkFgvNXHpPkXYhFZf8BA
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMMaPbDFcFYAB31Kmo8xEa
        subject_person_id: p_XgxkFgvNXHpPkXYhFZf8BA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Nc63we7VDRQbfhRCzD48P
          claim_id: c_uMMaPbDFcFYAB31Kmo8xEa
          source_id: s_Z61yWHbW6hyN58P9pqs1ay
          stance: supports
          locator: CBDB:332957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（332957）
          source: &a1
            id: s_Z61yWHbW6hyN58P9pqs1ay
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 332957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332957&o=json
            external_identifier: CBDB:332957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.388Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4Fzy5DD27Y4Xfg5xjLLVVc
        subject_person_id: p_XgxkFgvNXHpPkXYhFZf8BA
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
        - id: cs_8Fomeg92Y3Cnq9yRK8V4P3
          claim_id: c_4Fzy5DD27Y4Xfg5xjLLVVc
          source_id: s_Z61yWHbW6hyN58P9pqs1ay
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_CwVSb4dbQegeNrsezYG1Um
        subject_person_id: p_XgxkFgvNXHpPkXYhFZf8BA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wfvFAbMeeGg2JCRsQFqRMn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ovlsIo05PLG3XUMUoAVwbl
          claim_id: c_CwVSb4dbQegeNrsezYG1Um
          source_id: s_Z61yWHbW6hyN58P9pqs1ay
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wfvFAbMeeGg2JCRsQFqRMn
        status: active
        display_name: 王家卿
        merged_into_person_id: null
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_wfvFAbMeeGg2JCRsQFqRMn | 王家卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王銳（CBDB 332957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332957&o=json)
