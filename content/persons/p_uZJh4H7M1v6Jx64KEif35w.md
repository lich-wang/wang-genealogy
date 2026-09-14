---
schema: wang-person/v1
id: p_uZJh4H7M1v6Jx64KEif35w
status: active
merged_into: null
display_name: 王肅
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xtyGroTJ63Ytzsh7w1u2zD
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D21vwSDSNoi7jEn6A6MpKh
          claim_id: c_xtyGroTJ63Ytzsh7w1u2zD
          source_id: s_zzeVGkPbS36wkAhm4xE69d
          stance: supports
          locator: CBDB:319540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319540）
          source: &a1
            id: s_zzeVGkPbS36wkAhm4xE69d
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 319540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319540&o=json
            external_identifier: CBDB:319540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vr2kBT8jHsYMSWc7Lr89L1
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319540）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JiXgzcybtKxAH8jhKBnSXa
          claim_id: c_Vr2kBT8jHsYMSWc7Lr89L1
          source_id: s_zzeVGkPbS36wkAhm4xE69d
          stance: supports
          locator: CBDB:319540
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5YcqKMEtjeRHSi5_IATMC4
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w8kp3E7GopXJ9s4XjHQN1n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_418N-wirpgL3R4-nCfzQ4L
          claim_id: c_5YcqKMEtjeRHSi5_IATMC4
          source_id: s_zzeVGkPbS36wkAhm4xE69d
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_w8kp3E7GopXJ9s4XjHQN1n
        status: active
        display_name: 王哲
        merged_into_person_id: null
    - claim:
        id: c_iz2RGmEXpL9JCgXd2U40Ad
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7sjQsKdBb3M9ZomMXRC9xx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNbo761SSquQmSApXFdqEB
          claim_id: c_iz2RGmEXpL9JCgXd2U40Ad
          source_id: s_QhiFamjkGubQiiCqXyNAVa
          stance: supports
          locator: CBDB：兄弟 王哲（198811）之父／母 王肅
          quotation: null
          interpretation_note: 由兄弟关系推断：王聰 与 王哲 为同胞（CBDB 记「弟」），王哲 之父／母即 王聰 之父／母。
          source:
            id: s_QhiFamjkGubQiiCqXyNAVa
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 319574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319574&o=json
            external_identifier: CBDB:319574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7sjQsKdBb3M9ZomMXRC9xx
        status: active
        display_name: 王聰
        merged_into_person_id: null
    - claim:
        id: c_a_rIE3ImKjVsVGUGwNmfMN
        subject_person_id: p_uZJh4H7M1v6Jx64KEif35w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnivWNeA5CVFjC5KjVCL4L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHAr0BTbSYK1-N-jPUCkcc
          claim_id: c_a_rIE3ImKjVsVGUGwNmfMN
          source_id: s_mWp0vEpYQM5bXDzk4p-x7P
          stance: supports
          locator: CBDB：兄弟 王哲（198811）之父／母 王肅
          quotation: null
          interpretation_note: 由兄弟关系推断：王騰 与 王哲 为同胞（CBDB 记「弟」），王哲 之父／母即 王騰 之父／母。
          source:
            id: s_mWp0vEpYQM5bXDzk4p-x7P
            source_type: api_record
            title: 中国历代人物传记资料库：王騰（CBDB 319585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319585&o=json
            external_identifier: CBDB:319585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EnivWNeA5CVFjC5KjVCL4L
        status: active
        display_name: 王騰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | 王肅，明人物。天順四年進士，籍贯聞喜。（中国历代人物传记资料库 CBDB 319540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_w8kp3E7GopXJ9s4XjHQN1n | 王哲 | accepted |
| children | p_7sjQsKdBb3M9ZomMXRC9xx | 王聰 | accepted |
| children | p_EnivWNeA5CVFjC5KjVCL4L | 王騰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 319574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319574&o=json)
- [中国历代人物传记资料库：王肅（CBDB 319540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319540&o=json)
- [中国历代人物传记资料库：王騰（CBDB 319585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319585&o=json)
