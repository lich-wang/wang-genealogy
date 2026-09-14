---
schema: wang-person/v1
id: p_TTq2erMoECd9k33QFqPJKB
status: active
merged_into: null
display_name: 王宗
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VvCHJAY82yuLUX4e3toPHX
        subject_person_id: p_TTq2erMoECd9k33QFqPJKB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zf4ZTJTX3VBJ7P9RN3um7K
          claim_id: c_VvCHJAY82yuLUX4e3toPHX
          source_id: s_cs41y5Q63PAj6jAJqx4wgV
          stance: supports
          locator: CBDB:201312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201312）
          source: &a1
            id: s_cs41y5Q63PAj6jAJqx4wgV
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 201312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201312&o=json
            external_identifier: CBDB:201312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.670Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_b74DvaUwLF4BWLzBWGUPqf
        subject_person_id: p_TTq2erMoECd9k33QFqPJKB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_djGnmYYH2FXF3GRvBNuTtu
          claim_id: c_b74DvaUwLF4BWLzBWGUPqf
          source_id: s_cs41y5Q63PAj6jAJqx4wgV
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
        id: c_uNQHhwqUsp6kM8z5vrXmYu
        subject_person_id: p_TTq2erMoECd9k33QFqPJKB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗（生于1465年），明人物。明清進士進士，籍贯騰驤左衛，入仕進士。（中国历代人物传记资料库 CBDB 201312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lNBINLB2XI70lhACxpMOUe
          claim_id: c_uNQHhwqUsp6kM8z5vrXmYu
          source_id: s_cs41y5Q63PAj6jAJqx4wgV
          stance: supports
          locator: CBDB:201312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M1LzttNP_ct3YSWAcUTFdS
        subject_person_id: p_QKGAAeSaSvqwLmATQQdkV2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ZLE-3ALYUHkoawA4y9UQA
          claim_id: c_M1LzttNP_ct3YSWAcUTFdS
          source_id: s_G4DCzEwg3q89CKSag5Wjbg
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_G4DCzEwg3q89CKSag5Wjbg
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 270449）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270449&o=json
            external_identifier: CBDB:270449
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QKGAAeSaSvqwLmATQQdkV2
        status: active
        display_name: 王臣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_f19CRqwhgBjMoOh71iR_UX
        subject_person_id: p_PP2iVoC1BLiswdrQPtQxpx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iy62ZvHEgwEywM7VKdOqh5
          claim_id: c_f19CRqwhgBjMoOh71iR_UX
          source_id: s_gVoWJnAvnGYb57xNLUnGP5
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gVoWJnAvnGYb57xNLUnGP5
            source_type: api_record
            title: 中国历代人物传记资料库：王思禮（CBDB 270447）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270447&o=json
            external_identifier: CBDB:270447
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.834Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PP2iVoC1BLiswdrQPtQxpx
        status: active
        display_name: 王思禮
        merged_into_person_id: null
    - claim:
        id: c_QW-KI2LkFATX_RczrIL_lr
        subject_person_id: p_UYGM3cinfbB81eZdHaiiac
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FUdKChfVxQcIQHOWyaZhk5
          claim_id: c_QW-KI2LkFATX_RczrIL_lr
          source_id: s_zKRN3tMTF3NgypCPKbx3AS
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zKRN3tMTF3NgypCPKbx3AS
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 270448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270448&o=json
            external_identifier: CBDB:270448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UYGM3cinfbB81eZdHaiiac
        status: active
        display_name: 王榮
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_ieROOMpgiMiJqIRc5HBz3h
        subject_person_id: p_3DMuxeTNjgEnKre6269ni2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aGumL3jg5bhwj4e2h2pyKo
          claim_id: c_ieROOMpgiMiJqIRc5HBz3h
          source_id: s_x4pfIgB53voJP-2RxeBxCa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x4pfIgB53voJP-2RxeBxCa
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 270454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270454&o=json
            external_identifier: CBDB:270454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3DMuxeTNjgEnKre6269ni2
        status: active
        display_name: 王錫
        merged_into_person_id: null
    - claim:
        id: c_8O5HbyUySJSDNpHNTrNm80
        subject_person_id: p_CHETTKB741bM8VdssGTV2C
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ls6SDYTZC8_TkkowMO1Xox
          claim_id: c_8O5HbyUySJSDNpHNTrNm80
          source_id: s_iue1oYtR2DciuEPCyo-pmj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iue1oYtR2DciuEPCyo-pmj
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 270455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270455&o=json
            external_identifier: CBDB:270455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CHETTKB741bM8VdssGTV2C
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_--3r6kiyh5Pbqn-K3pBYTz
        subject_person_id: p_Ewn83ivk7rEJq9gScxNHis
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TTq2erMoECd9k33QFqPJKB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qX_d7lia2yawU_1hMclo2x
          claim_id: c_--3r6kiyh5Pbqn-K3pBYTz
          source_id: s_z4O1JTRu7JtIIr3nMKh0WC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z4O1JTRu7JtIIr3nMKh0WC
            source_type: api_record
            title: 中国历代人物传记资料库：王宇（CBDB 270457）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json
            external_identifier: CBDB:270457
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ewn83ivk7rEJq9gScxNHis
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_8_UPsf-sZIOQfM6eqn_WLc
        subject_person_id: p_TTq2erMoECd9k33QFqPJKB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_njBHiDwuzEPix4LBLe5QbN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DzXp8dkLHy_1g0DPI4ATTP
          claim_id: c_8_UPsf-sZIOQfM6eqn_WLc
          source_id: s_bZoHtxLF_PFdK1ejQAjNDS
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201312 王宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bZoHtxLF_PFdK1ejQAjNDS
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 270456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json
            external_identifier: CBDB:270456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_njBHiDwuzEPix4LBLe5QbN
        status: active
        display_name: 王宏
        merged_into_person_id: null
---

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | 王宗（生于1465年），明人物。明清進士進士，籍贯騰驤左衛，入仕進士。（中国历代人物传记资料库 CBDB 201312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QKGAAeSaSvqwLmATQQdkV2 | 王臣 | accepted |
| ancestors | p_PP2iVoC1BLiswdrQPtQxpx | 王思禮 | accepted |
| ancestors | p_UYGM3cinfbB81eZdHaiiac | 王榮 | accepted |
| other | p_3DMuxeTNjgEnKre6269ni2 | 王錫 | accepted |
| other | p_CHETTKB741bM8VdssGTV2C | 王寧 | accepted |
| other | p_Ewn83ivk7rEJq9gScxNHis | 王宇 | accepted |
| other | p_njBHiDwuzEPix4LBLe5QbN | 王宏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 270449）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270449&o=json)
- [中国历代人物传记资料库：王宏（CBDB 270456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270456&o=json)
- [中国历代人物传记资料库：王寧（CBDB 270455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270455&o=json)
- [中国历代人物传记资料库：王榮（CBDB 270448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270448&o=json)
- [中国历代人物传记资料库：王思禮（CBDB 270447）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270447&o=json)
- [中国历代人物传记资料库：王錫（CBDB 270454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270454&o=json)
- [中国历代人物传记资料库：王宇（CBDB 270457）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270457&o=json)
- [中国历代人物传记资料库：王宗（CBDB 201312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201312&o=json)
