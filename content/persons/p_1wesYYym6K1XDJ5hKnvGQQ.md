---
schema: wang-person/v1
id: p_1wesYYym6K1XDJ5hKnvGQQ
status: active
merged_into: null
display_name: 王嘉謨
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gVC2cPvBRGh6pvYqaFDe9P
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S5HdpQ7WMcuXW7usWsd3R1
          claim_id: c_gVC2cPvBRGh6pvYqaFDe9P
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: CBDB:207214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207214）
          source: &a1
            id: s_PjKW2LD3C685H4gfMHYoKL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 207214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json
            external_identifier: CBDB:207214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_SUJQ8oCWN9Rw4cE6GSqyFM
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pxgf4VsdomRwmfLu9Kz5MB
          claim_id: c_SUJQ8oCWN9Rw4cE6GSqyFM
          source_id: s_PjKW2LD3C685H4gfMHYoKL
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
        id: c_BvMxhLNSPyt6YXACpD7Lu6
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謨（生于1561年），明人物。明清進士進士，籍贯鄒平，入仕進士，曾任吏部觀政、文思院副使。（中国历代人物传记资料库 CBDB 207214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KsPAWiLvMocwEeKL9P3BOu
          claim_id: c_BvMxhLNSPyt6YXACpD7Lu6
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: CBDB:207214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RzLY7fh88PRKo8j2ghgPHZ
        subject_person_id: p_L8XuaB9Bf7x5KGQmxdXQcj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bOibbdhsYrUG269BJ1K_fl
          claim_id: c_RzLY7fh88PRKo8j2ghgPHZ
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_L8XuaB9Bf7x5KGQmxdXQcj
        status: active
        display_name: 王應祥
        merged_into_person_id: null
  children:
    - claim:
        id: c_FLsDgXFZQXqfHbzcKsPQhR
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GacPazPEChhN46VydLyqkq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7g6uYuWXE_njRPpHA3nXQZ
          claim_id: c_FLsDgXFZQXqfHbzcKsPQhR
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GacPazPEChhN46VydLyqkq
        status: active
        display_name: 王陟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LiYRz0tMj6E56IHoLenTJF
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HDPP8TXt1WhfCLovxb2goq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KM8-SKKPzsYh0QOPAwBAYE
          claim_id: c_LiYRz0tMj6E56IHoLenTJF
          source_id: s_lrlqXzDW2J5Ip7fpN6kXUv
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_lrlqXzDW2J5Ip7fpN6kXUv
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王嘉謨妻)（CBDB 229669）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229669&o=json
            external_identifier: CBDB:229669
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HDPP8TXt1WhfCLovxb2goq
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_CWrOxKjkN59LhkGPVXNmWM
        subject_person_id: p_Tawt1eCFb81MCXPQW7rDfP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QlflFkzHbgVjokNR0RJfTN
          claim_id: c_CWrOxKjkN59LhkGPVXNmWM
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tawt1eCFb81MCXPQW7rDfP
        status: active
        display_name: 王欽
        merged_into_person_id: null
    - claim:
        id: c_rery2fNnHRHkgfEQDTt6gh
        subject_person_id: p_he38UGzixz7HwYn8yHRkGn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGvV34PWM_AXYOoimhidLQ
          claim_id: c_rery2fNnHRHkgfEQDTt6gh
          source_id: s_PjKW2LD3C685H4gfMHYoKL
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_he38UGzixz7HwYn8yHRkGn
        status: active
        display_name: 王寶
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_wOnrsJYWBkonYGeV0bAz56
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_N98y6wLuGvKEpW2nm8vzqQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WfQ4Ag1hn8RYhcjykD_frI
          claim_id: c_wOnrsJYWBkonYGeV0bAz56
          source_id: s_9saC7JOE8zjKcjj7gF2LyP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207214 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9saC7JOE8zjKcjj7gF2LyP
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉議（CBDB 229671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json
            external_identifier: CBDB:229671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N98y6wLuGvKEpW2nm8vzqQ
        status: active
        display_name: 王嘉議
        merged_into_person_id: null
    - claim:
        id: c_PSVFQxbTjPkh8N5x0AxGrc
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P4oDvKky3p11NpEDd81kpU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jmzE3SUpFTKWBRoUodDmdZ
          claim_id: c_PSVFQxbTjPkh8N5x0AxGrc
          source_id: s_Wu9KRAhpNF2sFW3LqpmO4S
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207214 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Wu9KRAhpNF2sFW3LqpmO4S
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉詔（CBDB 229672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229672&o=json
            external_identifier: CBDB:229672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4oDvKky3p11NpEDd81kpU
        status: active
        display_name: 王嘉詔
        merged_into_person_id: null
    - claim:
        id: c_9Lyt8Lzge04_Qs9_VHMDNe
        subject_person_id: p_1wesYYym6K1XDJ5hKnvGQQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rnJFD66CMv5ozbD1npW8J5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fqwS0bvObTF4JPa8OdA_ec
          claim_id: c_9Lyt8Lzge04_Qs9_VHMDNe
          source_id: s_IU3U9X-7Y-NNiVNHI56hUL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207214 王嘉謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IU3U9X-7Y-NNiVNHI56hUL
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉譔（CBDB 550656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json
            external_identifier: CBDB:550656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rnJFD66CMv5ozbD1npW8J5
        status: active
        display_name: 王嘉譔
        merged_into_person_id: null
---

# 王嘉謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉謨 | accepted |
| birth.date | 1561年 | accepted |
| bio.summary | 王嘉謨（生于1561年），明人物。明清進士進士，籍贯鄒平，入仕進士，曾任吏部觀政、文思院副使。（中国历代人物传记资料库 CBDB 207214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L8XuaB9Bf7x5KGQmxdXQcj | 王應祥 | accepted |
| children | p_GacPazPEChhN46VydLyqkq | 王陟 | accepted |
| spouses | p_HDPP8TXt1WhfCLovxb2goq | 李氏 | accepted |
| ancestors | p_Tawt1eCFb81MCXPQW7rDfP | 王欽 | accepted |
| ancestors | p_he38UGzixz7HwYn8yHRkGn | 王寶 | accepted |
| other | p_N98y6wLuGvKEpW2nm8vzqQ | 王嘉議 | accepted |
| other | p_P4oDvKky3p11NpEDd81kpU | 王嘉詔 | accepted |
| other | p_rnJFD66CMv5ozbD1npW8J5 | 王嘉譔 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王嘉謨妻)（CBDB 229669）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229669&o=json)
- [中国历代人物传记资料库：王嘉謨（CBDB 207214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207214&o=json)
- [中国历代人物传记资料库：王嘉議（CBDB 229671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229671&o=json)
- [中国历代人物传记资料库：王嘉詔（CBDB 229672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229672&o=json)
- [中国历代人物传记资料库：王嘉譔（CBDB 550656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550656&o=json)
