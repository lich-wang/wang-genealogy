---
schema: wang-person/v1
id: p_uPsdzDMGQe5JCzP3cXbxt2
status: active
merged_into: null
display_name: 王智本
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LJ8NBHbYimDiJCQBm3g65Y
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rnMuXfzSCjzjS6mkKkX1v4
          claim_id: c_LJ8NBHbYimDiJCQBm3g65Y
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
          stance: supports
          locator: CBDB:140009
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140009）
          source: &a1
            id: s_EzwbGFdDzCq8bYcu29n1sn
            source_type: api_record
            title: 中国历代人物传记资料库：王智本（CBDB 140009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140009&o=json
            external_identifier: CBDB:140009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.197Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sZg8w56H3JJRvDgAGbtyod
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgsSMhthCf979m7nzpUqfe
          claim_id: c_sZg8w56H3JJRvDgAGbtyod
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_VKu5MUAsPUB2TReeJRmNhL
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 696年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rmfHJVxY3hWXYoDSvV244u
          claim_id: c_VKu5MUAsPUB2TReeJRmNhL
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pZMbdCwPoV66GaZV2vjphd
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智本（621年—696年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140009）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5illSCRMxcpzzsqvJ0JT6D
          claim_id: c_pZMbdCwPoV66GaZV2vjphd
          source_id: s_EzwbGFdDzCq8bYcu29n1sn
          stance: supports
          locator: CBDB:140009
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rvICLkWZZhqPlU-qCaANx3
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2eeQbgMfeQuMA9UPW235DA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RINUP7w9-DyTfPCGkir8-p
          claim_id: c_rvICLkWZZhqPlU-qCaANx3
          source_id: s_HabJYqfXuxfBUFHS6mHba3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HabJYqfXuxfBUFHS6mHba3
            source_type: api_record
            title: 中国历代人物传记资料库：王晦（CBDB 149928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149928&o=json
            external_identifier: CBDB:149928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2eeQbgMfeQuMA9UPW235DA
        status: active
        display_name: 王晦
        merged_into_person_id: null
    - claim:
        id: c_ckNGQqBbnihD3xH1DudaRg
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c2dKdRVtndCfyX2avCQ1J9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zp_vmRRax_MCvGPWB05A1F
          claim_id: c_ckNGQqBbnihD3xH1DudaRg
          source_id: s_ruXuo5BRU453a5D7219aBr
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 18：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ruXuo5BRU453a5D7219aBr
            source_type: api_record
            title: 中国历代人物传记资料库：王勖（CBDB 149927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149927&o=json
            external_identifier: CBDB:149927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c2dKdRVtndCfyX2avCQ1J9
        status: active
        display_name: 王勖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_6C-DcRr5YlyWMTdMuv9ZOO
        subject_person_id: p_uPsdzDMGQe5JCzP3cXbxt2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2f9Px3AmwTjD5MzhZdGLDE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8B2O3nXOoBD6yvB8qTllgq
          claim_id: c_6C-DcRr5YlyWMTdMuv9ZOO
          source_id: s_Dd1EszA4xnUfyF9YKR1pe2
          stance: supports
          locator: 唐代墓誌匯編:二卷，Wansuitongtian 18：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dd1EszA4xnUfyF9YKR1pe2
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 149929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149929&o=json
            external_identifier: CBDB:149929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2f9Px3AmwTjD5MzhZdGLDE
        status: active
        display_name: 王日新
        merged_into_person_id: null
  other: []
---

# 王智本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智本 | accepted |
| birth.date | 621年 | accepted |
| death.date | 696年 | accepted |
| bio.summary | 王智本（621年—696年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 140009） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2eeQbgMfeQuMA9UPW235DA | 王晦 | accepted |
| children | p_c2dKdRVtndCfyX2avCQ1J9 | 王勖 | accepted |
| descendants | p_2f9Px3AmwTjD5MzhZdGLDE | 王日新 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晦（CBDB 149928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149928&o=json)
- [中国历代人物传记资料库：王日新（CBDB 149929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149929&o=json)
- [中国历代人物传记资料库：王勖（CBDB 149927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149927&o=json)
- [中国历代人物传记资料库：王智本（CBDB 140009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140009&o=json)
