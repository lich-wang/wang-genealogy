---
schema: wang-person/v1
id: p_FmPZ9e75zqCio8hBbq7nuP
status: active
merged_into: null
display_name: 王德和
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_26869NU3XChJ8hae1K7RN4
        subject_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德和
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RzJapojqKmmSaeUTGhAaGh
          claim_id: c_26869NU3XChJ8hae1K7RN4
          source_id: s_wPuPXsDBamWkWLuQczkVsG
          stance: supports
          locator: CBDB:218711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218711）
          source: &a1
            id: s_wPuPXsDBamWkWLuQczkVsG
            source_type: api_record
            title: 中国历代人物传记资料库：王德和（CBDB 218711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json
            external_identifier: CBDB:218711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T4dfyrLrFo76SoJCqxxrAQ
        subject_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德和，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218711）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sgfdtXeu2vvBkCAs4QS5t9
          claim_id: c_T4dfyrLrFo76SoJCqxxrAQ
          source_id: s_wPuPXsDBamWkWLuQczkVsG
          stance: supports
          locator: CBDB:218711
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MksQrqtDfTtLbzbBpIpoYU
        subject_person_id: p_heKv1Lrv2nNs2FP242e8RP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLKmFY1pfuhrHvO1Fq8Y6Q
          claim_id: c_MksQrqtDfTtLbzbBpIpoYU
          source_id: s_5mjf1oOKfbogpbSx3KKfmY
          stance: supports
          locator: CBDB：兄弟 王德新（126819）之父／母 王士望
          quotation: null
          interpretation_note: 由兄弟关系推断：王德和 与 王德新 为同胞（CBDB 记「兄」），王德新 之父／母即 王德和 之父／母。
          source:
            id: s_5mjf1oOKfbogpbSx3KKfmY
            source_type: api_record
            title: 中国历代人物传记资料库：王德和（CBDB 218711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json
            external_identifier: CBDB:218711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_heKv1Lrv2nNs2FP242e8RP
        status: active
        display_name: 王士望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uAgiI3Q_8uPFz2V56-_w79
        subject_person_id: p_FmPZ9e75zqCio8hBbq7nuP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P62PwvTysFNxEPkUXBg1Fm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ReL1GousPOpnfs-wtBLgKd
          claim_id: c_uAgiI3Q_8uPFz2V56-_w79
          source_id: s_5mjf1oOKfbogpbSx3KKfmY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126819 王德新）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5mjf1oOKfbogpbSx3KKfmY
            source_type: api_record
            title: 中国历代人物传记资料库：王德和（CBDB 218711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json
            external_identifier: CBDB:218711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P62PwvTysFNxEPkUXBg1Fm
        status: active
        display_name: 王德新
        merged_into_person_id: null
---

# 王德和

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德和 | accepted |
| bio.summary | 王德和，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218711） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heKv1Lrv2nNs2FP242e8RP | 王士望 | accepted |
| other | p_P62PwvTysFNxEPkUXBg1Fm | 王德新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德和（CBDB 218711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218711&o=json)
