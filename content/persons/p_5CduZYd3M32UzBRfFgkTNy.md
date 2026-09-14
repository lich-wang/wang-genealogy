---
schema: wang-person/v1
id: p_5CduZYd3M32UzBRfFgkTNy
status: active
merged_into: null
display_name: 王祿
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c8kWWWD9gsQCVPWLGQA9MQ
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JXrvVkGwZcr3TMRZJkbUXp
          claim_id: c_c8kWWWD9gsQCVPWLGQA9MQ
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: CBDB:199491
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199491）
          source: &a1
            id: s_VYJvgz4n1AbQdfJrLeEkYN
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 199491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json
            external_identifier: CBDB:199491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RJVLty2Sk1wgKVUPWY3dbC
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_12BRohAFf45P8eH7rP34XU
          claim_id: c_RJVLty2Sk1wgKVUPWY3dbC
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ELEGXUDPzQJEzQp9CrYkD9
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祿（生于1436年），明人物。明清進士進士，籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 199491）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_101hg9jx0uunGK9MxT31QM
          claim_id: c_ELEGXUDPzQJEzQp9CrYkD9
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: CBDB:199491
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-j2z-l9JM3nHa0w4FrRHRH
        subject_person_id: p_t5oHeornqu2QNuT9xayaao
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Ng43zi1PIEtc3lp8TFQo5
          claim_id: c_-j2z-l9JM3nHa0w4FrRHRH
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_t5oHeornqu2QNuT9xayaao
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_56XjOHdGXEnnGmvYC48n7u
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fpT3xisGvzXPznBAzXbZ9o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KkCuo50Ln1vTwm3Zh7b0KU
          claim_id: c_56XjOHdGXEnnGmvYC48n7u
          source_id: s_QNwmsiKk4_hsYFd57ZyJku
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QNwmsiKk4_hsYFd57ZyJku
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王祿妻)（CBDB 245778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245778&o=json
            external_identifier: CBDB:245778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fpT3xisGvzXPznBAzXbZ9o
        status: active
        display_name: 林氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_ClVu-0E6DgN7futdSG-7hF
        subject_person_id: p_nYBJ8DhUaL2NcKE4G7AVS7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpz9nZJ4vRQmBCgN1EdE5_
          claim_id: c_ClVu-0E6DgN7futdSG-7hF
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nYBJ8DhUaL2NcKE4G7AVS7
        status: active
        display_name: 王希遠
        merged_into_person_id: null
    - claim:
        id: c_eErsknKe6DJMlVpEf-H9_3
        subject_person_id: p_mTzxwAEMxvLCjgbpNJPkQq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5CduZYd3M32UzBRfFgkTNy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fbEQpyfowcJAOH5nW_ZOtD
          claim_id: c_eErsknKe6DJMlVpEf-H9_3
          source_id: s_VYJvgz4n1AbQdfJrLeEkYN
          stance: supports
          locator: 成化八年進士登科錄:一卷，第二甲第六十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mTzxwAEMxvLCjgbpNJPkQq
        status: active
        display_name: 王澤
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_kivh5s8myvbEcK2K7ujsth
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QJg85sEDy4nhnMULVKcQ96
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_2ZoOm4fuAVl388u1K5c0
          claim_id: c_kivh5s8myvbEcK2K7ujsth
          source_id: s_6jELS3TAFgp8NLAmVtnLey
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199491 王祿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6jELS3TAFgp8NLAmVtnLey
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 245779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json
            external_identifier: CBDB:245779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QJg85sEDy4nhnMULVKcQ96
        status: active
        display_name: 王祐
        merged_into_person_id: null
    - claim:
        id: c_cONz0mMpvWfruJ0Uq0HDT1
        subject_person_id: p_5CduZYd3M32UzBRfFgkTNy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vx3T8VwhpKz6o448Z5Jm7Z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVbtmWr2uRbn3pQjRtsIcY
          claim_id: c_cONz0mMpvWfruJ0Uq0HDT1
          source_id: s_KHJ_qKqIae5YG7SYlR6CUF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199491 王祿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KHJ_qKqIae5YG7SYlR6CUF
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 245781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json
            external_identifier: CBDB:245781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vx3T8VwhpKz6o448Z5Jm7Z
        status: active
        display_name: 王禮
        merged_into_person_id: null
---

# 王祿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祿 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | 王祿（生于1436年），明人物。明清進士進士，籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 199491） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5oHeornqu2QNuT9xayaao | 王英 | accepted |
| spouses | p_fpT3xisGvzXPznBAzXbZ9o | 林氏 | accepted |
| ancestors | p_nYBJ8DhUaL2NcKE4G7AVS7 | 王希遠 | accepted |
| ancestors | p_mTzxwAEMxvLCjgbpNJPkQq | 王澤 | accepted |
| other | p_QJg85sEDy4nhnMULVKcQ96 | 王祐 | accepted |
| other | p_vx3T8VwhpKz6o448Z5Jm7Z | 王禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王祿妻)（CBDB 245778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245778&o=json)
- [中国历代人物传记资料库：王禮（CBDB 245781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245781&o=json)
- [中国历代人物传记资料库：王祿（CBDB 199491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199491&o=json)
- [中国历代人物传记资料库：王祐（CBDB 245779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245779&o=json)
