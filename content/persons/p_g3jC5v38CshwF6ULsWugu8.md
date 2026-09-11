---
schema: wang-person/v1
id: p_g3jC5v38CshwF6ULsWugu8
status: active
merged_into: null
display_name: 王萬全
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NUxsDMWM1uu6eDJ49xq979
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_icS8jw3XNjSHFU3BW4DFVG
          claim_id: c_NUxsDMWM1uu6eDJ49xq979
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB:20097
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20097）
          source: &a1
            id: s_1FyAe3rC6ErjuS6LgiXmy4
            source_type: api_record
            title: 中国历代人物传记资料库：王萬全（CBDB 20097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json
            external_identifier: CBDB:20097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.755Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MGLmPFhErhtGmxbaKGpBAY
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬全，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 20097）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NMBkhTfKpF-vWUmlk-lRm1
          claim_id: c_MGLmPFhErhtGmxbaKGpBAY
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB:20097
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_AtZIoNbOaA8fAd4Oc14Bwm
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wKvGTskPwF5yoaMhpXH6fM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QYa1hVlyaSA3l5Frgl3dEK
          claim_id: c_AtZIoNbOaA8fAd4Oc14Bwm
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB 双向互证（子 王伯大 ⇄ 父 王萬全）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_wKvGTskPwF5yoaMhpXH6fM
        status: active
        display_name: 王伯大
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_BOYzEL6k7MIiQyU5PErDJX
        subject_person_id: p_g3jC5v38CshwF6ULsWugu8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qe21iK51grgXQR5j3MyvsM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_10gWiFDz94TZLRWulk0TBI
          claim_id: c_BOYzEL6k7MIiQyU5PErDJX
          source_id: s_1FyAe3rC6ErjuS6LgiXmy4
          stance: supports
          locator: CBDB 双向互证（孫 王維 ⇄ 祖父 王萬全）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qe21iK51grgXQR5j3MyvsM
        status: active
        display_name: 王維
        merged_into_person_id: null
  other: []
---

# 王萬全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬全 | accepted |
| bio.summary | 王萬全，宋人物。籍贯長溪，入仕進士。（中国历代人物传记资料库 CBDB 20097） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wKvGTskPwF5yoaMhpXH6fM | 王伯大 | accepted |
| descendants | p_qe21iK51grgXQR5j3MyvsM | 王維 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬全（CBDB 20097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20097&o=json)
