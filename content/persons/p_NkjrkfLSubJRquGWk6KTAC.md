---
schema: wang-person/v1
id: p_NkjrkfLSubJRquGWk6KTAC
status: active
merged_into: null
display_name: 王祚
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEezg9Tc4mqnZdzbWm9aK5
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXzEYmrmUEFhKgmULfyc1M
          claim_id: c_iEezg9Tc4mqnZdzbWm9aK5
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: CBDB:266762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266762）
          source: &a1
            id: s_b2aRZZg64z4mZCMpV7GCxE
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 266762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json
            external_identifier: CBDB:266762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeKLpS8oL9NVCbs5cy53aF
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ir_ltU_j1XokU3zFejINH6
          claim_id: c_WeKLpS8oL9NVCbs5cy53aF
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: CBDB:266762
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_voyUgdYB-wMCqg7GvQTr82
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKtPEZYLBxGrUB4Vrq2JEV
          claim_id: c_voyUgdYB-wMCqg7GvQTr82
          source_id: s_nsNS4tYiMyfHMLUzeivoSe
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第一甲第二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nsNS4tYiMyfHMLUzeivoSe
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 126892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json
            external_identifier: CBDB:126892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
    - claim:
        id: c_GwjCK-J5m0w1LC2kdrrT62
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3Lhz8LSf7mstdCaD69ddPj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dgDvTOoDAGMrdrw1WbR7S4
          claim_id: c_GwjCK-J5m0w1LC2kdrrT62
          source_id: s__ZqvVMYd83WuNBd0GPcJOT
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王珫 与 王瓚 为同胞（CBDB 记「兄」），王瓚 之父／母即 王珫 之父／母。
          source:
            id: s__ZqvVMYd83WuNBd0GPcJOT
            source_type: api_record
            title: 中国历代人物传记资料库：王珫（CBDB 266768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json
            external_identifier: CBDB:266768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3Lhz8LSf7mstdCaD69ddPj
        status: active
        display_name: 王珫
        merged_into_person_id: null
    - claim:
        id: c_PX-vLI88kwd67461MdKm6W
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNuZXq6oOb5nWgj6ZMikhc
          claim_id: c_PX-vLI88kwd67461MdKm6W
          source_id: s_d9cYzj1NOhjrwgPXs7KX68
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王預 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王預 之父／母。
          source:
            id: s_d9cYzj1NOhjrwgPXs7KX68
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 266765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json
            external_identifier: CBDB:266765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6hPs3h2jLCkarQiCorCUQJ
        status: active
        display_name: 王預
        merged_into_person_id: null
    - claim:
        id: c_w5aEpGovXe-j3mAUXgmKyL
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HXUX2XFYmFJicF3sMvu7i1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-BpiX1Vnd2EVoD1FHIsBb-
          claim_id: c_w5aEpGovXe-j3mAUXgmKyL
          source_id: s_iN-LD-LKEI8Hj12REBXP7G
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王珵 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王珵 之父／母。
          source:
            id: s_iN-LD-LKEI8Hj12REBXP7G
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 266766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266766&o=json
            external_identifier: CBDB:266766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HXUX2XFYmFJicF3sMvu7i1
        status: active
        display_name: 王珵
        merged_into_person_id: null
    - claim:
        id: c_RZ2kH8hhUCcVD8irZQX5WK
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NGbd2mH7UDvFHQwaMK5Ckp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7AnxVLp1F3V18oC7SaQY3A
          claim_id: c_RZ2kH8hhUCcVD8irZQX5WK
          source_id: s_lqcLr7sdcqfD_LP7HiuXG8
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王琲 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王琲 之父／母。
          source:
            id: s_lqcLr7sdcqfD_LP7HiuXG8
            source_type: api_record
            title: 中国历代人物传记资料库：王琲（CBDB 266767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json
            external_identifier: CBDB:266767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NGbd2mH7UDvFHQwaMK5Ckp
        status: active
        display_name: 王琲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | 王祚，明人物。弘治九年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 266762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |
| children | p_3Lhz8LSf7mstdCaD69ddPj | 王珫 | accepted |
| children | p_6hPs3h2jLCkarQiCorCUQJ | 王預 | accepted |
| children | p_HXUX2XFYmFJicF3sMvu7i1 | 王珵 | accepted |
| children | p_NGbd2mH7UDvFHQwaMK5Ckp | 王琲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琲（CBDB 266767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266767&o=json)
- [中国历代人物传记资料库：王珵（CBDB 266766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266766&o=json)
- [中国历代人物传记资料库：王珫（CBDB 266768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266768&o=json)
- [中国历代人物传记资料库：王預（CBDB 266765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 126892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126892&o=json)
- [中国历代人物传记资料库：王祚（CBDB 266762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json)
