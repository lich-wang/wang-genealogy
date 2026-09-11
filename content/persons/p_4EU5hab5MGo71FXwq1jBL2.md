---
schema: wang-person/v1
id: p_4EU5hab5MGo71FXwq1jBL2
status: active
merged_into: null
display_name: 王方智
cbdb_id: 152942
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LNNTk9Pa7NMR1kUzUH57Ys
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方智，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152942 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wExGWauiUt29-5U5wZdiv0
          claim_id: c_LNNTk9Pa7NMR1kUzUH57Ys
          source_id: s_JPANQ5q2E5sRHhEQ2mKaQV
          stance: supports
          locator: CBDB:152942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_JPANQ5q2E5sRHhEQ2mKaQV
            source_type: api_record
            title: 中国历代人物传记资料库：王方智（CBDB 152942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152942&o=json
            external_identifier: CBDB:152942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RyuCMBsiLKWffBmPQYdc7k
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4D13Ydub12Pf7wuLoQ6Xqx
          claim_id: c_RyuCMBsiLKWffBmPQYdc7k
          source_id: s_JPANQ5q2E5sRHhEQ2mKaQV
          stance: supports
          locator: CBDB:152942
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_JPANQ5q2E5sRHhEQ2mKaQV
            source_type: api_record
            title: 中国历代人物传记资料库：王方智（CBDB 152942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152942&o=json
            external_identifier: CBDB:152942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JwLgh894EHQReTgYV9iSq8
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4EU5hab5MGo71FXwq1jBL2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7ZnpUu38q5oaP6ydMCHGy
          claim_id: c_JwLgh894EHQReTgYV9iSq8
          source_id: s_r7EDbM1bneMsxyVzj8CZd6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_r7EDbM1bneMsxyVzj8CZd6
            source_type: api_record
            title: 中国历代人物传记资料库：王弘訓（CBDB 152941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json
            external_identifier: CBDB:152941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_yYWP56xYF7YEvgG32tAH3B
        status: active
        display_name: 王弘訓
        merged_into_person_id: null
  children:
    - claim:
        id: c_xhK-edSdeQeb52kW07YXLg
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4dqEWnCHn8qdLGXjhwCDuh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7QlhnphyLaoSGzGN6FWGW
          claim_id: c_xhK-edSdeQeb52kW07YXLg
          source_id: s_W2JYVnDUaqPAC7mv2gzk3i
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_W2JYVnDUaqPAC7mv2gzk3i
            source_type: api_record
            title: 中国历代人物传记资料库：王固貞（CBDB 175655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175655&o=json
            external_identifier: CBDB:175655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4dqEWnCHn8qdLGXjhwCDuh
        status: active
        display_name: 王固貞
        merged_into_person_id: null
    - claim:
        id: c_X9sWpQO-X-Ekuwo_vDJ4xe
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJm6CQ4oPcuxLAr142KLDK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ex68-P1GU835k11zgGh8zy
          claim_id: c_X9sWpQO-X-Ekuwo_vDJ4xe
          source_id: s_AxMDB8qa1LChdFc28BoNd3
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AxMDB8qa1LChdFc28BoNd3
            source_type: api_record
            title: 中国历代人物传记资料库：王固基（CBDB 175653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175653&o=json
            external_identifier: CBDB:175653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AJm6CQ4oPcuxLAr142KLDK
        status: active
        display_name: 王固基
        merged_into_person_id: null
    - claim:
        id: c_9s1BZ4psrByol7hy8mt5D9
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B66dkqwmxQnHimr8zprK22
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kVA3RgPEtt5DG0rAoQfetG
          claim_id: c_9s1BZ4psrByol7hy8mt5D9
          source_id: s_fVNQy9cm36mtpqwEmM7XRn
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fVNQy9cm36mtpqwEmM7XRn
            source_type: api_record
            title: 中国历代人物传记资料库：王固廉（CBDB 175657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175657&o=json
            external_identifier: CBDB:175657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_B66dkqwmxQnHimr8zprK22
        status: active
        display_name: 王固廉
        merged_into_person_id: null
    - claim:
        id: c_MJXrl8YWc8aXSoTjOFsfl2
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kMB47yQQ8M34DfeF4JqNxL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CRdNXbfdaYRSFB7sFd87S4
          claim_id: c_MJXrl8YWc8aXSoTjOFsfl2
          source_id: s_KuJkxmck1MPUE9uRnN8r82
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KuJkxmck1MPUE9uRnN8r82
            source_type: api_record
            title: 中国历代人物传记资料库：王固業（CBDB 175656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175656&o=json
            external_identifier: CBDB:175656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kMB47yQQ8M34DfeF4JqNxL
        status: active
        display_name: 王固業
        merged_into_person_id: null
    - claim:
        id: c_FSdY46px2bCKzS38zJhTOJ
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oBD3Lrd2Yz8RsfjH7h4B9D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aycyq-sEDfpZ4Xzkc5KVuX
          claim_id: c_FSdY46px2bCKzS38zJhTOJ
          source_id: s_8LBJJynCVZJo6vfkVLbo6F
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8LBJJynCVZJo6vfkVLbo6F
            source_type: api_record
            title: 中国历代人物传记资料库：王固信（CBDB 175654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175654&o=json
            external_identifier: CBDB:175654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oBD3Lrd2Yz8RsfjH7h4B9D
        status: active
        display_name: 王固信
        merged_into_person_id: null
    - claim:
        id: c_NdUsIGMB-KyBAV3has_MBz
        subject_person_id: p_4EU5hab5MGo71FXwq1jBL2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RH1Cuusc2PR1U4ny6cUVDC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PSHAvG9tS9oZnk5BnKPvE3
          claim_id: c_NdUsIGMB-KyBAV3has_MBz
          source_id: s_EVPet1nn8zbNVjXmanAF6R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EVPet1nn8zbNVjXmanAF6R
            source_type: api_record
            title: 中国历代人物传记资料库：王固忠（CBDB 175652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175652&o=json
            external_identifier: CBDB:175652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RH1Cuusc2PR1U4ny6cUVDC
        status: active
        display_name: 王固忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王方智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王方智，唐人物。中国历代人物传记资料库（CBDB）以人物编号 152942 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王方智 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yYWP56xYF7YEvgG32tAH3B | 王弘訓 | accepted |
| children | p_4dqEWnCHn8qdLGXjhwCDuh | 王固貞 | accepted |
| children | p_AJm6CQ4oPcuxLAr142KLDK | 王固基 | accepted |
| children | p_B66dkqwmxQnHimr8zprK22 | 王固廉 | accepted |
| children | p_kMB47yQQ8M34DfeF4JqNxL | 王固業 | accepted |
| children | p_oBD3Lrd2Yz8RsfjH7h4B9D | 王固信 | accepted |
| children | p_RH1Cuusc2PR1U4ny6cUVDC | 王固忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方智（CBDB 152942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152942&o=json)
- [中国历代人物传记资料库：王固基（CBDB 175653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175653&o=json)
- [中国历代人物传记资料库：王固廉（CBDB 175657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175657&o=json)
- [中国历代人物传记资料库：王固信（CBDB 175654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175654&o=json)
- [中国历代人物传记资料库：王固業（CBDB 175656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175656&o=json)
- [中国历代人物传记资料库：王固貞（CBDB 175655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175655&o=json)
- [中国历代人物传记资料库：王固忠（CBDB 175652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175652&o=json)
- [中国历代人物传记资料库：王弘訓（CBDB 152941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json)
