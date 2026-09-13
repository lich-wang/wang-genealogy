---
schema: wang-person/v1
id: p_9QhSck2AYshf4nqhc8rPWy
status: active
merged_into: null
display_name: 王璦
cbdb_id: 191500
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gH5pbzspVHSwQora58Ywx6
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璦（卒于789年），唐人物。籍贯穎陽，曾任縣丞。（中国历代人物传记资料库 CBDB 191500）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_b7Yl4AcFomch0p5IekgxNW
          claim_id: c_gH5pbzspVHSwQora58Ywx6
          source_id: s_9YzSircHuh1fd11iUi7rf8
          stance: supports
          locator: CBDB:191500
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9YzSircHuh1fd11iUi7rf8
            source_type: api_record
            title: 中国历代人物传记资料库：王璦（CBDB 191500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191500&o=json
            external_identifier: CBDB:191500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sXJYCHiEwV8KPc62A6gdzJ
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 789年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0789-01-01
            latest: 0789-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hP5QKfFnGA39DWsB6WP9zn
          claim_id: c_sXJYCHiEwV8KPc62A6gdzJ
          source_id: s_9YzSircHuh1fd11iUi7rf8
          stance: supports
          locator: CBDB:191500
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 789
          source:
            id: s_9YzSircHuh1fd11iUi7rf8
            source_type: api_record
            title: 中国历代人物传记资料库：王璦（CBDB 191500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191500&o=json
            external_identifier: CBDB:191500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NwfgP8mY2HsTeCByntJaQX
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sAjKk8LaACq5q1CYxFBk5D
          claim_id: c_NwfgP8mY2HsTeCByntJaQX
          source_id: s_9YzSircHuh1fd11iUi7rf8
          stance: supports
          locator: CBDB:191500
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 789
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hogA9OZ6itBIXwNCN1qvch
        subject_person_id: p_gNnbPsEfQpfMDh3EXxCn5e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9QhSck2AYshf4nqhc8rPWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BlNG9HvOHCweQZYycz2kFI
          claim_id: c_hogA9OZ6itBIXwNCN1qvch
          source_id: s_KBLS6caE7PswJPZw9JuEkH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KBLS6caE7PswJPZw9JuEkH
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 161287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161287&o=json
            external_identifier: CBDB:161287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gNnbPsEfQpfMDh3EXxCn5e
        status: active
        display_name: 王良
        merged_into_person_id: null
  children:
    - claim:
        id: c_H-Jj5gDPsY68fsMLPkyl0Z
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iFt5uE8u9k4BSBnyeCjeA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GN7RCjxksFcxYmDQf419Ia
          claim_id: c_H-Jj5gDPsY68fsMLPkyl0Z
          source_id: s_Nz3HN2oDG621PB5JZTLGuB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nz3HN2oDG621PB5JZTLGuB
            source_type: api_record
            title: 中国历代人物传记资料库：王建侯（CBDB 161300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161300&o=json
            external_identifier: CBDB:161300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iFt5uE8u9k4BSBnyeCjeA7
        status: active
        display_name: 王建侯
        merged_into_person_id: null
    - claim:
        id: c_dtEWmMRsC_F1pkuBJ8xIB4
        subject_person_id: p_9QhSck2AYshf4nqhc8rPWy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_W9D533dxNGbrd8JxQH9LEx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fUc1AmU9woLdhjTF0kW4MH
          claim_id: c_dtEWmMRsC_F1pkuBJ8xIB4
          source_id: s_QZ6V6GgK2BB52BQk2wFZVp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZ6V6GgK2BB52BQk2wFZVp
            source_type: api_record
            title: 中国历代人物传记资料库：王從長（CBDB 161289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161289&o=json
            external_identifier: CBDB:161289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_W9D533dxNGbrd8JxQH9LEx
        status: active
        display_name: 王從長
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璦（卒于789年），唐人物。籍贯穎陽，曾任縣丞。（中国历代人物传记资料库 CBDB 191500） | accepted |
| death.date | 789年 | accepted |
| name.primary | 王璦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gNnbPsEfQpfMDh3EXxCn5e | 王良 | accepted |
| children | p_iFt5uE8u9k4BSBnyeCjeA7 | 王建侯 | accepted |
| children | p_W9D533dxNGbrd8JxQH9LEx | 王從長 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璦（CBDB 191500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191500&o=json)
- [中国历代人物传记资料库：王從長（CBDB 161289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161289&o=json)
- [中国历代人物传记资料库：王建侯（CBDB 161300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161300&o=json)
- [中国历代人物传记资料库：王良（CBDB 161287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161287&o=json)
