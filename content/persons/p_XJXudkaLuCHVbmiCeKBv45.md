---
schema: wang-person/v1
id: p_XJXudkaLuCHVbmiCeKBv45
status: active
merged_into: null
display_name: 王官
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aEw3Yd4ZYH6WDhCTQ4Hu9T
        subject_person_id: p_XJXudkaLuCHVbmiCeKBv45
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mji9hggVZaaR7kSatdmjKP
          claim_id: c_aEw3Yd4ZYH6WDhCTQ4Hu9T
          source_id: s_8AGtNpuGjzZmKayDN21s97
          stance: supports
          locator: CBDB:201950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201950）
          source: &a1
            id: s_8AGtNpuGjzZmKayDN21s97
            source_type: api_record
            title: 中国历代人物传记资料库：王官（CBDB 201950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201950&o=json
            external_identifier: CBDB:201950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rt4WR8e1JZTWLbppAAkHWs
        subject_person_id: p_XJXudkaLuCHVbmiCeKBv45
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1492年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_31nGBrA3HhgHbetP7XcKEi
          claim_id: c_rt4WR8e1JZTWLbppAAkHWs
          source_id: s_8AGtNpuGjzZmKayDN21s97
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
        id: c_XUrA9sb2mkZqFXB5myP7xH
        subject_person_id: p_XJXudkaLuCHVbmiCeKBv45
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官（生于1492年），明人物。明清進士進士，籍贯寧夏左屯衛，入仕進士。（中国历代人物传记资料库 CBDB 201950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ay7PLnECsntWj7gC_qZXJP
          claim_id: c_XUrA9sb2mkZqFXB5myP7xH
          source_id: s_8AGtNpuGjzZmKayDN21s97
          stance: supports
          locator: CBDB:201950
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-R72gV9C361EQCzsADpPrG
        subject_person_id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e8Wb7itaolHGz1EDWLiAcx
          claim_id: c_-R72gV9C361EQCzsADpPrG
          source_id: s_nhVzFWj9zSZEt9UDw1GYD7
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nhVzFWj9zSZEt9UDw1GYD7
            source_type: api_record
            title: 中国历代人物传记资料库：王文進（CBDB 280988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json
            external_identifier: CBDB:280988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RQpo9Kr6EeUuDNSVEJ5Qs2
        status: active
        display_name: 王文進
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_sw6ngN4elvWaIfrowcsBF_
        subject_person_id: p_6SDy3bF7CQQgYA5jaz9rmc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r5e-6G-yd-zgeRk0viHtMM
          claim_id: c_sw6ngN4elvWaIfrowcsBF_
          source_id: s_BqoY5UjRJXJ492gM2etwt8
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BqoY5UjRJXJ492gM2etwt8
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 280985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280985&o=json
            external_identifier: CBDB:280985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.033Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6SDy3bF7CQQgYA5jaz9rmc
        status: active
        display_name: 王誠
        merged_into_person_id: null
    - claim:
        id: c_jLG_Br7Uba_ZmT_uemgoqY
        subject_person_id: p_QLYY3wK54kAaQowKFrboE5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_XJXudkaLuCHVbmiCeKBv45
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YPS00Qc_reTtmV_uWdvvBj
          claim_id: c_jLG_Br7Uba_ZmT_uemgoqY
          source_id: s_n972c1PRTFU2TJXgZJg3Rh
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第三十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n972c1PRTFU2TJXgZJg3Rh
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 280987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280987&o=json
            external_identifier: CBDB:280987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.035Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QLYY3wK54kAaQowKFrboE5
        status: active
        display_name: 王清
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官 | accepted |
| birth.date | 1492年 | accepted |
| bio.summary | 王官（生于1492年），明人物。明清進士進士，籍贯寧夏左屯衛，入仕進士。（中国历代人物传记资料库 CBDB 201950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RQpo9Kr6EeUuDNSVEJ5Qs2 | 王文進 | accepted |
| ancestors | p_6SDy3bF7CQQgYA5jaz9rmc | 王誠 | accepted |
| ancestors | p_QLYY3wK54kAaQowKFrboE5 | 王清 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 280985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280985&o=json)
- [中国历代人物传记资料库：王官（CBDB 201950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201950&o=json)
- [中国历代人物传记资料库：王清（CBDB 280987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280987&o=json)
- [中国历代人物传记资料库：王文進（CBDB 280988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280988&o=json)
