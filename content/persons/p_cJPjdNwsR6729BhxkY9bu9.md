---
schema: wang-person/v1
id: p_cJPjdNwsR6729BhxkY9bu9
status: active
merged_into: null
display_name: 王撫民
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EAVLnYzMwJLysmcL3Km2Bs
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H7deTNYoUmQv5vhWkEx4qK
          claim_id: c_EAVLnYzMwJLysmcL3Km2Bs
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: CBDB:210428
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210428）
          source: &a1
            id: s_fX2NiBK6X1E4F19HSQV43o
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 210428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json
            external_identifier: CBDB:210428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPn953nJHptgc7KCTo1b9d
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫民，明人物。隆慶五年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 210428）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L4yEc-qPupaIiXGm1R4tQQ
          claim_id: c_gPn953nJHptgc7KCTo1b9d
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: CBDB:210428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wLHNayD-BMiX-fwj_amy1n
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BS0Jzn4pTaobnYPano6J-t
          claim_id: c_wLHNayD-BMiX-fwj_amy1n
          source_id: s_fX2NiBK6X1E4F19HSQV43o
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百四十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
    - claim:
        id: c_DzqI7lWVFlMa7mrAkq6GsI
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cE05HvBQeOTm5tCxtAbwdK
          claim_id: c_DzqI7lWVFlMa7mrAkq6GsI
          source_id: s_tLKvVMJr45JwzWM4cP01ow
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文薦 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文薦 之父／母。
          source:
            id: s_tLKvVMJr45JwzWM4cP01ow
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 210432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json
            external_identifier: CBDB:210432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H1xyKpfKKwUtC1UcZNSPpZ
        status: active
        display_name: 王文薦
        merged_into_person_id: null
    - claim:
        id: c_8fJl0bKW_GGcyEfdzH5mr6
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yuiodw_2E2ZxJyZfcgIRUF
          claim_id: c_8fJl0bKW_GGcyEfdzH5mr6
          source_id: s_2EySgIHreaqR0TYHNPNSt3
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文藝 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文藝 之父／母。
          source:
            id: s_2EySgIHreaqR0TYHNPNSt3
            source_type: api_record
            title: 中国历代人物传记资料库：王文藝（CBDB 210434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json
            external_identifier: CBDB:210434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        status: active
        display_name: 王文藝
        merged_into_person_id: null
    - claim:
        id: c_bhmvOvnorX2eHX-6QmPbfN
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LB3b7yHcYcCthoZFCN1DB6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wMAPiTF-sje2O9SvrbB2sh
          claim_id: c_bhmvOvnorX2eHX-6QmPbfN
          source_id: s_zvqkL-OhLF_hH3xDxtHYS4
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王藻 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王藻 之父／母。
          source:
            id: s_zvqkL-OhLF_hH3xDxtHYS4
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 210431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json
            external_identifier: CBDB:210431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LB3b7yHcYcCthoZFCN1DB6
        status: active
        display_name: 王藻
        merged_into_person_id: null
    - claim:
        id: c__Uk0O5U9IkBsoUkQ0wvKiq
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Mfr14WZdLtDDLf9Fy4GsT7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jSIykLuMHYg3Yx_HK4Oz_4
          claim_id: c__Uk0O5U9IkBsoUkQ0wvKiq
          source_id: s_Psw9qeQSVTv6ubsGXjN6sP
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文英 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文英 之父／母。
          source:
            id: s_Psw9qeQSVTv6ubsGXjN6sP
            source_type: api_record
            title: 中国历代人物传记资料库：王文英（CBDB 210433）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json
            external_identifier: CBDB:210433
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Mfr14WZdLtDDLf9Fy4GsT7
        status: active
        display_name: 王文英
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王撫民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫民 | accepted |
| bio.summary | 王撫民，明人物。隆慶五年進士，籍贯清源，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 210428） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |
| children | p_H1xyKpfKKwUtC1UcZNSPpZ | 王文薦 | accepted |
| children | p_HK7Yqf7oZNVE1Sm8bdpuJV | 王文藝 | accepted |
| children | p_LB3b7yHcYcCthoZFCN1DB6 | 王藻 | accepted |
| children | p_Mfr14WZdLtDDLf9Fy4GsT7 | 王文英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 210428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210428&o=json)
- [中国历代人物传记资料库：王文薦（CBDB 210432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json)
- [中国历代人物传记资料库：王文藝（CBDB 210434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json)
- [中国历代人物传记资料库：王文英（CBDB 210433）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210433&o=json)
- [中国历代人物传记资料库：王藻（CBDB 210431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210431&o=json)
