---
schema: wang-person/v1
id: p_bZcZfxCHimqNMGao1LQfLN
status: active
merged_into: null
display_name: 王蘋
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bRWqN95WVJ6YfvNXLnnsqJ
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8NRnHxFagtqHCLsiTF9dWv
          claim_id: c_bRWqN95WVJ6YfvNXLnnsqJ
          source_id: s_LofCYCda2stWd8D7hGgchb
          stance: supports
          locator: CBDB:7381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7381）
          source: &a1
            id: s_LofCYCda2stWd8D7hGgchb
            source_type: api_record
            title: 中国历代人物传记资料库：王蘋（CBDB 7381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json
            external_identifier: CBDB:7381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LU5BZKrxS9iLEVy94KZNkn
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1082年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1j3B6fTkoUQb8KrxLoETB
          claim_id: c_LU5BZKrxS9iLEVy94KZNkn
          source_id: s_LofCYCda2stWd8D7hGgchb
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
        id: c_ZZFrHa4Hvk5ZXaimGgvxCb
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1153年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JgKajUjfo918PKvN8kA9hL
          claim_id: c_ZZFrHa4Hvk5ZXaimGgvxCb
          source_id: s_LofCYCda2stWd8D7hGgchb
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
        id: c_45s3bZ8iY9jCfzv7EcxHqe
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王蘋（1082年—1153年），宋人物。籍贯吳江，入仕科舉學校: 恩賜出身、特賜出身等，曾任左朝奉郎、殿中省尚舍奉御、通判。（中国历代人物传记资料库 CBDB 7381）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M-fk1W5pXHCe0VKM9TKI4K
          claim_id: c_45s3bZ8iY9jCfzv7EcxHqe
          source_id: s_LofCYCda2stWd8D7hGgchb
          stance: supports
          locator: CBDB:7381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rp1ShREXduZmsuASWya6p8
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bZcZfxCHimqNMGao1LQfLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEyL5yddorE6UTRhworqWg
          claim_id: c_Rp1ShREXduZmsuASWya6p8
          source_id: s_LofCYCda2stWd8D7hGgchb
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1595：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PETdD8Jz2DJR4mSmHcNTrv
        status: active
        display_name: 王仲舉
        merged_into_person_id: null
  children:
    - claim:
        id: c_dVruGjC6XFwTdKbpUV5NE4
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6DjJvLM9nbNTxdag2acvh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGgU010CcGyBoWbeBbpRP2
          claim_id: c_dVruGjC6XFwTdKbpUV5NE4
          source_id: s_JRZOGbL3vARFDBWgO6p1MU
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7381）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_JRZOGbL3vARFDBWgO6p1MU
            source_type: api_record
            title: 中国历代人物传记资料库：王大中（CBDB 10339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json
            external_identifier: CBDB:10339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6DjJvLM9nbNTxdag2acvh2
        status: active
        display_name: 王大中
        merged_into_person_id: null
    - claim:
        id: c_JsaG7z0-FZM7iuRuZj3EyW
        subject_person_id: p_bZcZfxCHimqNMGao1LQfLN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jhKR5MKHXYzYiohEvbyxPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hHjfNFByKhvp485oqTrnS
          claim_id: c_JsaG7z0-FZM7iuRuZj3EyW
          source_id: s_2jobhJSns8qTViiGh_5efo
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7381）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_2jobhJSns8qTViiGh_5efo
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 10340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10340&o=json
            external_identifier: CBDB:10340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jhKR5MKHXYzYiohEvbyxPE
        status: active
        display_name: 王大臨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘋 | accepted |
| birth.date | 1082年 | accepted |
| death.date | 1153年 | accepted |
| bio.summary | 王蘋（1082年—1153年），宋人物。籍贯吳江，入仕科舉學校: 恩賜出身、特賜出身等，曾任左朝奉郎、殿中省尚舍奉御、通判。（中国历代人物传记资料库 CBDB 7381） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PETdD8Jz2DJR4mSmHcNTrv | 王仲舉 | accepted |
| children | p_6DjJvLM9nbNTxdag2acvh2 | 王大中 | accepted |
| children | p_jhKR5MKHXYzYiohEvbyxPE | 王大臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 10340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10340&o=json)
- [中国历代人物传记资料库：王大中（CBDB 10339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10339&o=json)
- [中国历代人物传记资料库：王蘋（CBDB 7381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json)
