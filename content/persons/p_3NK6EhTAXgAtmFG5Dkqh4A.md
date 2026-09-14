---
schema: wang-person/v1
id: p_3NK6EhTAXgAtmFG5Dkqh4A
status: active
merged_into: null
display_name: 王詔
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHcnRMorFbWCxJujJXS8Y3
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xt6wbLJRjLTzUxAtUQGRLo
          claim_id: c_RHcnRMorFbWCxJujJXS8Y3
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: CBDB:67938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67938）
          source: &a1
            id: s_pFJEtZMtXSRxJbNHTJPiqT
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 67938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json
            external_identifier: CBDB:67938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zo1Vj3FDAQn99HNXx7nRb4
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1428年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SutKPVRWRECJtqmc2wykgz
          claim_id: c_zo1Vj3FDAQn99HNXx7nRb4
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
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
        id: c_bQkSPA7t6k1HAHHB2K3U3K
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WT7ZNGnVpaQZACyon4cU8
          claim_id: c_bQkSPA7t6k1HAHHB2K3U3K
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
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
        id: c_KEwqnh7P4Gn6WZxCGW8Sur
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詔（1428年—1491年），明人物。明清進士進士，籍贯寧晉，身份为未仕而卒，入仕進士。（中国历代人物传记资料库 CBDB 67938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9Dkn7JXSovY_wc5S9OkKhb
          claim_id: c_KEwqnh7P4Gn6WZxCGW8Sur
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: CBDB:67938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dEKOalLx5jmluTI1__SfQ5
        subject_person_id: p_mkEUUStA3H6zxa8Vzv7LyH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rKUpV2pr3s8XkG7N6JBbTr
          claim_id: c_dEKOalLx5jmluTI1__SfQ5
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mkEUUStA3H6zxa8Vzv7LyH
        status: active
        display_name: 王昂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bshnrj6WwKF1E02sbr7BpF
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hPJPD72anHdssJJebWQ769
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SxPfhMdR7K-xNHu3-yjSqJ
          claim_id: c_bshnrj6WwKF1E02sbr7BpF
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_hPJPD72anHdssJJebWQ769
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_t165Crl-QF54qr3EUU4H8y
        subject_person_id: p_1a4kV9bnUd3Gc32RqHYR8N
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yMqixIUqLH_4DUYiO6FXir
          claim_id: c_t165Crl-QF54qr3EUU4H8y
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1a4kV9bnUd3Gc32RqHYR8N
        status: active
        display_name: 王思义
        merged_into_person_id: null
    - claim:
        id: c_prsKYW53kMMS3zjdZvrhy-
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aU0kJ8MgQOAffymZBZm1xy
          claim_id: c_prsKYW53kMMS3zjdZvrhy-
          source_id: s_pFJEtZMtXSRxJbNHTJPiqT
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第六十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nmksiEiPj8BciQGG5LZXMB
        status: active
        display_name: 王理
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_cgZxDlxTVud9-mLsfNI1kT
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6d5u4KXShYSqA6iWUHjoz7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iVnzlLpPj2zN2JYfSVRJ4Z
          claim_id: c_cgZxDlxTVud9-mLsfNI1kT
          source_id: s_YlnKUFUreSQAoU5JD8dpsR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YlnKUFUreSQAoU5JD8dpsR
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 338053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json
            external_identifier: CBDB:338053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6d5u4KXShYSqA6iWUHjoz7
        status: active
        display_name: 王誥
        merged_into_person_id: null
    - claim:
        id: c_rsy_19EfiywO_MyWkNQ6TA
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KjASpV4nMp6G93U6MZvKrH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t-GTqARjjpIxbh-QRw9NIi
          claim_id: c_rsy_19EfiywO_MyWkNQ6TA
          source_id: s_6llkNhKswqnk-ZzewW4Ogf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6llkNhKswqnk-ZzewW4Ogf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 338064）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json
            external_identifier: CBDB:338064
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KjASpV4nMp6G93U6MZvKrH
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_eeGXq48k8kxALtINSxk9B2
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QCT1JrAAMuTrPdE9xk6A1T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lI-hghq0tC4jFinRK2h8jL
          claim_id: c_eeGXq48k8kxALtINSxk9B2
          source_id: s_eREpNRDUeZq1XF9qCK4zG4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eREpNRDUeZq1XF9qCK4zG4
            source_type: api_record
            title: 中国历代人物传记资料库：王銘（CBDB 338020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338020&o=json
            external_identifier: CBDB:338020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QCT1JrAAMuTrPdE9xk6A1T
        status: active
        display_name: 王銘
        merged_into_person_id: null
    - claim:
        id: c_VVBbsmHvyBBX7NnbNiLXZO
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jpTWPGGx48Ru5Dv5bx2XFG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2ZJMNSjKToN2ytWzHJ4I0
          claim_id: c_VVBbsmHvyBBX7NnbNiLXZO
          source_id: s_iYnsz-0x1smdRcH9FU-_WO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iYnsz-0x1smdRcH9FU-_WO
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 338042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338042&o=json
            external_identifier: CBDB:338042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jpTWPGGx48Ru5Dv5bx2XFG
        status: active
        display_name: 王讓
        merged_into_person_id: null
    - claim:
        id: c_qrxfDnETqUQBdvbqLpWno8
        subject_person_id: p_3NK6EhTAXgAtmFG5Dkqh4A
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qvCR1SY41Lq4VCNYzK347B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hHk5hOYz9u3j4wMZLWxbrT
          claim_id: c_qrxfDnETqUQBdvbqLpWno8
          source_id: s_qHg30jFn1TV5h9OlK25_kU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67938 王詔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qHg30jFn1TV5h9OlK25_kU
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 338031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338031&o=json
            external_identifier: CBDB:338031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qvCR1SY41Lq4VCNYzK347B
        status: active
        display_name: 王謙
        merged_into_person_id: null
---

# 王詔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詔 | accepted |
| birth.date | 1428年 | accepted |
| death.date | 1491年 | accepted |
| bio.summary | 王詔（1428年—1491年），明人物。明清進士進士，籍贯寧晉，身份为未仕而卒，入仕進士。（中国历代人物传记资料库 CBDB 67938） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mkEUUStA3H6zxa8Vzv7LyH | 王昂 | accepted |
| spouses | p_hPJPD72anHdssJJebWQ769 | 曹氏 | accepted |
| ancestors | p_1a4kV9bnUd3Gc32RqHYR8N | 王思义 | accepted |
| ancestors | p_nmksiEiPj8BciQGG5LZXMB | 王理 | accepted |
| other | p_6d5u4KXShYSqA6iWUHjoz7 | 王誥 | accepted |
| other | p_KjASpV4nMp6G93U6MZvKrH | 王鑾 | accepted |
| other | p_QCT1JrAAMuTrPdE9xk6A1T | 王銘 | accepted |
| other | p_jpTWPGGx48Ru5Dv5bx2XFG | 王讓 | accepted |
| other | p_qvCR1SY41Lq4VCNYzK347B | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 338053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338053&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 338064）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338064&o=json)
- [中国历代人物传记资料库：王銘（CBDB 338020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338020&o=json)
- [中国历代人物传记资料库：王謙（CBDB 338031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338031&o=json)
- [中国历代人物传记资料库：王讓（CBDB 338042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=338042&o=json)
- [中国历代人物传记资料库：王詔（CBDB 67938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67938&o=json)
