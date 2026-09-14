---
schema: wang-person/v1
id: p_Es8yza8LMXTHzyZARdgEtq
status: active
merged_into: null
display_name: 王安貞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UDmMxJcv27FAqtA6kC9Snj
        subject_person_id: p_Es8yza8LMXTHzyZARdgEtq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mm2EnnEFeQbsQc26J88fUm
          claim_id: c_UDmMxJcv27FAqtA6kC9Snj
          source_id: s_ucjjN7GFcSFfNHD6M2g2AN
          stance: supports
          locator: CBDB:35395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35395）
          source: &a1
            id: s_ucjjN7GFcSFfNHD6M2g2AN
            source_type: api_record
            title: 中国历代人物传记资料库：王安貞（CBDB 35395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json
            external_identifier: CBDB:35395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_db5nP6ydF9uKPjh6y5kPC1
        subject_person_id: p_Es8yza8LMXTHzyZARdgEtq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安貞，元人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EAcxFOjofvog1x5Xj8yINc
          claim_id: c_db5nP6ydF9uKPjh6y5kPC1
          source_id: s_ucjjN7GFcSFfNHD6M2g2AN
          stance: supports
          locator: CBDB:35395
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1EUa8b-s_mzrdsLZvrSFzW
        subject_person_id: p_3x6krzyjW88CDnt1QP9iWP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Es8yza8LMXTHzyZARdgEtq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rHAO1zannkWU5ByuUSyD3k
          claim_id: c_1EUa8b-s_mzrdsLZvrSFzW
          source_id: s_AEVxUw3ZoxIfno8SI3mIOK
          stance: supports
          locator: CBDB 亲属：父（KinPerson 35383）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_AEVxUw3ZoxIfno8SI3mIOK
            source_type: api_record
            title: 中国历代人物传记资料库：王安貞（CBDB 35395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json
            external_identifier: CBDB:35395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3x6krzyjW88CDnt1QP9iWP
        status: active
        display_name: 王珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安貞 | accepted |
| bio.summary | 王安貞，元人物。籍贯華陰。（中国历代人物传记资料库 CBDB 35395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3x6krzyjW88CDnt1QP9iWP | 王珪 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安貞（CBDB 35395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35395&o=json)
