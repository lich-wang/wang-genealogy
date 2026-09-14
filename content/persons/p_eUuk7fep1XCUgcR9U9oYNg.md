---
schema: wang-person/v1
id: p_eUuk7fep1XCUgcR9U9oYNg
status: active
merged_into: null
display_name: 王朝弼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tv7wHQKzttj4rym35SmHDd
        subject_person_id: p_eUuk7fep1XCUgcR9U9oYNg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ad9qQi45oGWkUTmAk2QdTM
          claim_id: c_tv7wHQKzttj4rym35SmHDd
          source_id: s_kENPrrZKHsZ1a5h212y4A6
          stance: supports
          locator: CBDB:295498
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295498）
          source: &a1
            id: s_kENPrrZKHsZ1a5h212y4A6
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 295498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json
            external_identifier: CBDB:295498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A6tLTFpKXRA5QaQMb4MQVZ
        subject_person_id: p_eUuk7fep1XCUgcR9U9oYNg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝弼，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295498）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uulVyyv78H3KTFR_Ue1e6C
          claim_id: c_A6tLTFpKXRA5QaQMb4MQVZ
          source_id: s_kENPrrZKHsZ1a5h212y4A6
          stance: supports
          locator: CBDB:295498
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SiO82XkZ3PACdTUAP7VYYh
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eUuk7fep1XCUgcR9U9oYNg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3LM3aKUIM2rDsKJ4MIbpwq
          claim_id: c_SiO82XkZ3PACdTUAP7VYYh
          source_id: s_qEkNMuGFlCD-kpOByGCmpV
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝弼 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝弼 之父／母。
          source:
            id: s_qEkNMuGFlCD-kpOByGCmpV
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 295498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json
            external_identifier: CBDB:295498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AX7eQXpp32FZKNQ3efJdUf
        status: active
        display_name: 王翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Dp5GC5Dy60UBf8zMqH0_b9
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eUuk7fep1XCUgcR9U9oYNg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWUtGspYgaxOK6H_hcZDWI
          claim_id: c_Dp5GC5Dy60UBf8zMqH0_b9
          source_id: s_qEkNMuGFlCD-kpOByGCmpV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202839 王朝相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qEkNMuGFlCD-kpOByGCmpV
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 295498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json
            external_identifier: CBDB:295498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AQPzHURj5Q55p8A3sruTTG
        status: active
        display_name: 王朝相
        merged_into_person_id: null
---

# 王朝弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝弼 | accepted |
| bio.summary | 王朝弼，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295498） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AX7eQXpp32FZKNQ3efJdUf | 王翮 | accepted |
| other | p_AQPzHURj5Q55p8A3sruTTG | 王朝相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝弼（CBDB 295498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295498&o=json)
