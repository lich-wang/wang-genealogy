---
schema: wang-person/v1
id: p_H62w62NygJ1818ULHj5N3C
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y1LnBRfH35CaZNjivs5Ywd
        subject_person_id: p_H62w62NygJ1818ULHj5N3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QyebHcvBYNW4rECnifC6QE
          claim_id: c_Y1LnBRfH35CaZNjivs5Ywd
          source_id: s_z3gW4VbSFEtJqtiM9du4i9
          stance: supports
          locator: CBDB:293395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293395）
          source: &a1
            id: s_z3gW4VbSFEtJqtiM9du4i9
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 293395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293395&o=json
            external_identifier: CBDB:293395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.420Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P9SHBLB281Hu7byMNQz4PW
        subject_person_id: p_H62w62NygJ1818ULHj5N3C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 293395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NzyT_KNfKcqUVwkUsBNOra
          claim_id: c_P9SHBLB281Hu7byMNQz4PW
          source_id: s_z3gW4VbSFEtJqtiM9du4i9
          stance: supports
          locator: CBDB:293395
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
        id: c_II5YSc4ITzlQBCae9Tqh1B
        subject_person_id: p_H62w62NygJ1818ULHj5N3C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AV2ZgKZQXWPMrvp5xNJqFj
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4pdV4_jaqjubixCMQizCmt
          claim_id: c_II5YSc4ITzlQBCae9Tqh1B
          source_id: s_f67YAvJ62hQ7NjsmZ31Sup
          stance: supports
          locator: 天順元年進士登科錄:一卷，第三甲第二十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_f67YAvJ62hQ7NjsmZ31Sup
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 126540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json
            external_identifier: CBDB:126540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AV2ZgKZQXWPMrvp5xNJqFj
        status: active
        display_name: 王克復
        merged_into_person_id: null
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | 王貴，明人物。天順元年進士。（中国历代人物传记资料库 CBDB 293395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AV2ZgKZQXWPMrvp5xNJqFj | 王克復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 293395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293395&o=json)
- [中国历代人物传记资料库：王克復（CBDB 126540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126540&o=json)
