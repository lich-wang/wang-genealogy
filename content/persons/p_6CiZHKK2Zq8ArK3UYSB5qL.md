---
schema: wang-person/v1
id: p_6CiZHKK2Zq8ArK3UYSB5qL
status: active
merged_into: null
display_name: 王瑄
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_91EPDQnng38N46WD77Kxh6
        subject_person_id: p_6CiZHKK2Zq8ArK3UYSB5qL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsnDxQ76sDksMB9Aim8ajv
          claim_id: c_91EPDQnng38N46WD77Kxh6
          source_id: s_qg8oGA2Ym96MCfb7dmDVhS
          stance: supports
          locator: CBDB:307130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307130）
          source: &a1
            id: s_qg8oGA2Ym96MCfb7dmDVhS
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 307130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307130&o=json
            external_identifier: CBDB:307130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SyBELazH88n4t7zV5B9AsC
        subject_person_id: p_6CiZHKK2Zq8ArK3UYSB5qL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 307130）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUgOIhEJHJJM_dtFPhLgTq
          claim_id: c_SyBELazH88n4t7zV5B9AsC
          source_id: s_qg8oGA2Ym96MCfb7dmDVhS
          stance: supports
          locator: CBDB:307130
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
        id: c_eE3dxpSwm6x-WY5jhcwnGS
        subject_person_id: p_6CiZHKK2Zq8ArK3UYSB5qL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_53ADyQPeHfyWpAQcTUrMfN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UD8Vo7ZjgnitSN4mRTc5gq
          claim_id: c_eE3dxpSwm6x-WY5jhcwnGS
          source_id: s_5eKwFEmCQjg83YXVcQXfxy
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5eKwFEmCQjg83YXVcQXfxy
            source_type: api_record
            title: 中国历代人物传记资料库：王順德（CBDB 203599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json
            external_identifier: CBDB:203599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_53ADyQPeHfyWpAQcTUrMfN
        status: active
        display_name: 王順德
        merged_into_person_id: null
  other: []
---

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | 王瑄，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 307130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_53ADyQPeHfyWpAQcTUrMfN | 王順德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王順德（CBDB 203599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203599&o=json)
- [中国历代人物传记资料库：王瑄（CBDB 307130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307130&o=json)
