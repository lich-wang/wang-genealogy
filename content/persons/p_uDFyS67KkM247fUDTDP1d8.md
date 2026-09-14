---
schema: wang-person/v1
id: p_uDFyS67KkM247fUDTDP1d8
status: active
merged_into: null
display_name: 王琯
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qP9x7DHhuP1DuRhQ9vHJtH
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tK7ebpi6tB9q1EBPB6WWGE
          claim_id: c_qP9x7DHhuP1DuRhQ9vHJtH
          source_id: s_8ec752UiV5HNKNAe1SktBm
          stance: supports
          locator: CBDB:264716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264716）
          source: &a1
            id: s_8ec752UiV5HNKNAe1SktBm
            source_type: api_record
            title: 中国历代人物传记资料库：王琯（CBDB 264716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264716&o=json
            external_identifier: CBDB:264716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TFpqiTAGLHuyTvtsvkzDsW
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琯，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TXbni8lS-OzvISZwcESvkz
          claim_id: c_TFpqiTAGLHuyTvtsvkzDsW
          source_id: s_8ec752UiV5HNKNAe1SktBm
          stance: supports
          locator: CBDB:264716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_amun5Jnm-uhYRNDyOym34I
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yt7BTSHcHKsWozExAQWe78
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C6RiawLhBRxFN_zzv6HJwz
          claim_id: c_amun5Jnm-uhYRNDyOym34I
          source_id: s_8ec752UiV5HNKNAe1SktBm
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yt7BTSHcHKsWozExAQWe78
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_r0hA2NJXrimynkagLT3Jb_
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SH3VcC1scKdi3JGTtN23MK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGSls2wjcBKDxf1U3OHWG5
          claim_id: c_r0hA2NJXrimynkagLT3Jb_
          source_id: s_JNghk0hFJo8jHPCf3bl28B
          stance: supports
          locator: CBDB：兄弟 王純（126658）之父／母 王琯
          quotation: null
          interpretation_note: 由兄弟关系推断：王綺 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王綺 之父／母。
          source:
            id: s_JNghk0hFJo8jHPCf3bl28B
            source_type: api_record
            title: 中国历代人物传记资料库：王綺（CBDB 264721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json
            external_identifier: CBDB:264721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SH3VcC1scKdi3JGTtN23MK
        status: active
        display_name: 王綺
        merged_into_person_id: null
    - claim:
        id: c_c9S354asT4Mqw89kZGgzv8
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iE2US3dJj1aLU6791NixD9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OajGBBhgh5jtSuUIgDR0ao
          claim_id: c_c9S354asT4Mqw89kZGgzv8
          source_id: s_g7u6vRf2qCQdzZ-AimS7nA
          stance: supports
          locator: CBDB：兄弟 王純（126658）之父／母 王琯
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王純 为同胞（CBDB 记「兄」），王純 之父／母即 王績 之父／母。
          source:
            id: s_g7u6vRf2qCQdzZ-AimS7nA
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 264720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json
            external_identifier: CBDB:264720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iE2US3dJj1aLU6791NixD9
        status: active
        display_name: 王績
        merged_into_person_id: null
    - claim:
        id: c_x8PLDTW4HqYrET36DdyqVm
        subject_person_id: p_uDFyS67KkM247fUDTDP1d8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_re9jUCqxrWKFvcQX57pMDi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5sDEzaUaQJwVKuJgVACqlh
          claim_id: c_x8PLDTW4HqYrET36DdyqVm
          source_id: s_POc2x0opd9f8HU7Ruz-qVc
          stance: supports
          locator: CBDB：兄弟 王純（126658）之父／母 王琯
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼 与 王純 为同胞（CBDB 记「弟」），王純 之父／母即 王繼 之父／母。
          source:
            id: s_POc2x0opd9f8HU7Ruz-qVc
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 264719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json
            external_identifier: CBDB:264719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_re9jUCqxrWKFvcQX57pMDi
        status: active
        display_name: 王繼
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王琯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琯 | accepted |
| bio.summary | 王琯，明人物。弘治六年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 264716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yt7BTSHcHKsWozExAQWe78 | 王純 | accepted |
| children | p_SH3VcC1scKdi3JGTtN23MK | 王綺 | accepted |
| children | p_iE2US3dJj1aLU6791NixD9 | 王績 | accepted |
| children | p_re9jUCqxrWKFvcQX57pMDi | 王繼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琯（CBDB 264716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264716&o=json)
- [中国历代人物传记资料库：王績（CBDB 264720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264720&o=json)
- [中国历代人物传记资料库：王繼（CBDB 264719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264719&o=json)
- [中国历代人物传记资料库：王綺（CBDB 264721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264721&o=json)
