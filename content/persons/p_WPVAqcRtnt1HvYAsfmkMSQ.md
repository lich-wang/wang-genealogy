---
schema: wang-person/v1
id: p_WPVAqcRtnt1HvYAsfmkMSQ
status: active
merged_into: null
display_name: 王松年
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ez6LkurKKgE2f1doyYUCfr
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWwriurkPD47a1MJzfhSf7
          claim_id: c_Ez6LkurKKgE2f1doyYUCfr
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
          stance: supports
          locator: CBDB:175700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175700）
          source: &a1
            id: s_NDQ1uJirCp5rSA1AZQEKJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 175700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json
            external_identifier: CBDB:175700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_n1Hie8JzwDoXf3RF9iGr6D
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3YGt9mDU8s3w3KtC2PE7d
          claim_id: c_n1Hie8JzwDoXf3RF9iGr6D
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
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
        id: c_ed7VdFfYcCtDocv8YJy91y
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年（卒于547年），南北朝人物。籍贯北芒山，曾任黄門侍郎。（中国历代人物传记资料库 CBDB 175700）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qqrNtMqwtgZIBYUVXdn0Fp
          claim_id: c_ed7VdFfYcCtDocv8YJy91y
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
          stance: supports
          locator: CBDB:175700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PMAFZ7MbYtRehtuKKFhaMI
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GFwcmsFtl8tn56Me_rnVcM
          claim_id: c_PMAFZ7MbYtRehtuKKFhaMI
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zGvoPBJYdrW1La2gEY3uQW
        status: active
        display_name: 王遵業
        merged_into_person_id: null
  children:
    - claim:
        id: c_nEouT8fbGDBTnKWbTl7vTA
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5DyZb4VPN6kQ3yNqbGjxpz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dhy1nJjXfDNVeXuU7BgihN
          claim_id: c_nEouT8fbGDBTnKWbTl7vTA
          source_id: s_djtoCsz5bs8P8NA1pp3FyJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_djtoCsz5bs8P8NA1pp3FyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 175701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json
            external_identifier: CBDB:175701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5DyZb4VPN6kQ3yNqbGjxpz
        status: active
        display_name: 王邵
        merged_into_person_id: null
    - claim:
        id: c_h2izkhqMAUGkBg888D-HdD
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dWQCCgNtNB99axZAQQi97j
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b1_3YiPTo38Ky7kCcTjNmN
          claim_id: c_h2izkhqMAUGkBg888D-HdD
          source_id: s_EB3u1pLfRk4LXUJcqAXcpY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EB3u1pLfRk4LXUJcqAXcpY
            source_type: api_record
            title: 中国历代人物传记资料库：王柬（CBDB 175761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175761&o=json
            external_identifier: CBDB:175761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.111Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dWQCCgNtNB99axZAQQi97j
        status: active
        display_name: 王柬
        merged_into_person_id: null
    - claim:
        id: c_jB0Taildr5WPM7tXZzv4m7
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OF2jx5QifBrFaRMVsAHfc2
          claim_id: c_jB0Taildr5WPM7tXZzv4m7
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qM3hu2KJqieQspo6CFRvHo
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 175745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json
            external_identifier: CBDB:175745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mvjMNdfTTwoLQPLYKCSTQr
        status: active
        display_name: 王規
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松年 | accepted |
| death.date | 547年 | accepted |
| bio.summary | 王松年（卒于547年），南北朝人物。籍贯北芒山，曾任黄門侍郎。（中国历代人物传记资料库 CBDB 175700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zGvoPBJYdrW1La2gEY3uQW | 王遵業 | accepted |
| children | p_5DyZb4VPN6kQ3yNqbGjxpz | 王邵 | accepted |
| children | p_dWQCCgNtNB99axZAQQi97j | 王柬 | accepted |
| children | p_mvjMNdfTTwoLQPLYKCSTQr | 王規 | accepted |

## 外部来源

- [中国历代人物传记资料库：王規（CBDB 175745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json)
- [中国历代人物传记资料库：王柬（CBDB 175761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175761&o=json)
- [中国历代人物传记资料库：王邵（CBDB 175701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175701&o=json)
- [中国历代人物传记资料库：王松年（CBDB 175700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json)
