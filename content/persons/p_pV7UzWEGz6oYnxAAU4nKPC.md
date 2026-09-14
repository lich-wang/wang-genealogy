---
schema: wang-person/v1
id: p_pV7UzWEGz6oYnxAAU4nKPC
status: active
merged_into: null
display_name: 王之城
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UrFNP8RxqzP67ToAuJDem6
        subject_person_id: p_pV7UzWEGz6oYnxAAU4nKPC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之城
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tp4qbAkrxKrYHKzhUkVv4t
          claim_id: c_UrFNP8RxqzP67ToAuJDem6
          source_id: s_ADNBsEE59nqqtUrAccjBXW
          stance: supports
          locator: CBDB:217739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（217739）
          source: &a1
            id: s_ADNBsEE59nqqtUrAccjBXW
            source_type: api_record
            title: 中国历代人物传记资料库：王之城（CBDB 217739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json
            external_identifier: CBDB:217739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.258Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uVCwoGi1qUkAtPL1Nm2bfW
        subject_person_id: p_pV7UzWEGz6oYnxAAU4nKPC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之城，明人物。萬曆五年進士，籍贯新城，入仕貢生: 選貢(優貢 after 1628)。（中国历代人物传记资料库 CBDB 217739）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5nFRimB4emG-pnGNPEz2je
          claim_id: c_uVCwoGi1qUkAtPL1Nm2bfW
          source_id: s_ADNBsEE59nqqtUrAccjBXW
          stance: supports
          locator: CBDB:217739
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PXMs6yRhGjzcsLO9rVicsm
        subject_person_id: p_2XaF6KrMwGSDeaU76DAGrz
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_pV7UzWEGz6oYnxAAU4nKPC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AfWBxOdekGjbL5PTXaPAJJ
          claim_id: c_PXMs6yRhGjzcsLO9rVicsm
          source_id: s_SGyM-rR_My9_66x0ITb6LW
          stance: supports
          locator: CBDB：兄弟 王之猷（126467）之父／母 王重光
          quotation: null
          interpretation_note: 由兄弟关系推断：王之城 与 王之猷 为同胞（CBDB 记「弟」），王之猷 之父／母即 王之城 之父／母。
          source:
            id: s_SGyM-rR_My9_66x0ITb6LW
            source_type: api_record
            title: 中国历代人物传记资料库：王之城（CBDB 217739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json
            external_identifier: CBDB:217739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2XaF6KrMwGSDeaU76DAGrz
        status: active
        display_name: 王重光
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9q-CrAkTFyuHJTtGYTDkF1
        subject_person_id: p_5r1wESpKqnWgbhR5AChbjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pV7UzWEGz6oYnxAAU4nKPC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fu7wJOTuoaWExv9tDhVQls
          claim_id: c_9q-CrAkTFyuHJTtGYTDkF1
          source_id: s_SGyM-rR_My9_66x0ITb6LW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126467 王之猷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SGyM-rR_My9_66x0ITb6LW
            source_type: api_record
            title: 中国历代人物传记资料库：王之城（CBDB 217739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json
            external_identifier: CBDB:217739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5r1wESpKqnWgbhR5AChbjE
        status: active
        display_name: 王之猷
        merged_into_person_id: null
---

# 王之城

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之城 | accepted |
| bio.summary | 王之城，明人物。萬曆五年進士，籍贯新城，入仕貢生: 選貢(優貢 after 1628)。（中国历代人物传记资料库 CBDB 217739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2XaF6KrMwGSDeaU76DAGrz | 王重光 | accepted |
| other | p_5r1wESpKqnWgbhR5AChbjE | 王之猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之城（CBDB 217739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217739&o=json)
