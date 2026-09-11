---
schema: wang-person/v1
id: p_VocUX3MNnhbxZwU1f4zNjN
status: active
merged_into: null
display_name: 王輿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RHtVbDVjp1CpvHhceBq2KU
        subject_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mnAekmV7XfH3xJaLhMq2yP
          claim_id: c_RHtVbDVjp1CpvHhceBq2KU
          source_id: s_P1H4Z2Tr1QVe5Dox2PABSG
          stance: supports
          locator: CBDB:203979
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203979）
          source: &a1
            id: s_P1H4Z2Tr1QVe5Dox2PABSG
            source_type: api_record
            title: 中国历代人物传记资料库：王輿（CBDB 203979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203979&o=json
            external_identifier: CBDB:203979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ot54m6NKRTfmCPBdsuwCMC
        subject_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1513年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8D636CFYWnJkozndgMaRcB
          claim_id: c_ot54m6NKRTfmCPBdsuwCMC
          source_id: s_P1H4Z2Tr1QVe5Dox2PABSG
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
        id: c_nXJzvPE7Ma66noXK5nQvG1
        subject_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輿（生于1513年），明人物。明清進士進士，籍贯涇陽，入仕進士。（中国历代人物传记资料库 CBDB 203979）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9OL0FNcTWd9we0LAr22XXK
          claim_id: c_nXJzvPE7Ma66noXK5nQvG1
          source_id: s_P1H4Z2Tr1QVe5Dox2PABSG
          stance: supports
          locator: CBDB:203979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FSNbjenSMhtzNw8qcB0Hsw
        subject_person_id: p_tp4HBGLu9rb2Wi3DJX6Yj9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PbjHxChc_5gZ9s_xylvBqK
          claim_id: c_FSNbjenSMhtzNw8qcB0Hsw
          source_id: s_SQqY5CHsbu6aX2vsNJxsDt
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SQqY5CHsbu6aX2vsNJxsDt
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 312780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312780&o=json
            external_identifier: CBDB:312780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tp4HBGLu9rb2Wi3DJX6Yj9
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5iQ-4hclAYRJx6dUS_PYy3
        subject_person_id: p_rGht5PzVe7FNDGMpfHDHsN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbK3Kn8jftam9E3z_3uWGQ
          claim_id: c_5iQ-4hclAYRJx6dUS_PYy3
          source_id: s_DeXY7t3uvB4251CEVCGv5g
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DeXY7t3uvB4251CEVCGv5g
            source_type: api_record
            title: 中国历代人物传记资料库：王幹（CBDB 312779）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312779&o=json
            external_identifier: CBDB:312779
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rGht5PzVe7FNDGMpfHDHsN
        status: active
        display_name: 王幹
        merged_into_person_id: null
    - claim:
        id: c_9xq9wKAvIdw1Nvygh4Hw-f
        subject_person_id: p_XGzT1G5btUjnHBZQ9kKfQa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VocUX3MNnhbxZwU1f4zNjN
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iIGvP_BCLzgNl1WC2STgtn
          claim_id: c_9xq9wKAvIdw1Nvygh4Hw-f
          source_id: s_1JXHXq2RkeJkZkwCbb4NDd
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1JXHXq2RkeJkZkwCbb4NDd
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 312778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312778&o=json
            external_identifier: CBDB:312778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XGzT1G5btUjnHBZQ9kKfQa
        status: active
        display_name: 王敬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王輿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輿 | accepted |
| birth.date | 1513年 | accepted |
| bio.summary | 王輿（生于1513年），明人物。明清進士進士，籍贯涇陽，入仕進士。（中国历代人物传记资料库 CBDB 203979） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tp4HBGLu9rb2Wi3DJX6Yj9 | 王鼎 | accepted |
| ancestors | p_rGht5PzVe7FNDGMpfHDHsN | 王幹 | accepted |
| ancestors | p_XGzT1G5btUjnHBZQ9kKfQa | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 312780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312780&o=json)
- [中国历代人物传记资料库：王幹（CBDB 312779）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312779&o=json)
- [中国历代人物传记资料库：王敬（CBDB 312778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312778&o=json)
- [中国历代人物传记资料库：王輿（CBDB 203979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203979&o=json)
